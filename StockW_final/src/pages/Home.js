import styles from '../pages_css/Home.css';
import Navbar from '../compenents/Navbar.js';
import Footer from '../compenents/Footer.js';
import Carousel from '../compenents/Carousel';

import Products from '../compenents/products';
import contents1 from '../data/content';
import brand_nav from '../data/brand_nav';

import { Link} from 'react-router-dom';

import { useContext } from 'react';
import { LanguageContext } from '../compenents/LanguageContext';

const Home = () => {
  const { language } = useContext(LanguageContext);
  
  const translations = {
    en: {
      recommended: 'Recommended For You',
      trending: 'Trending Sneakers',
      popular: 'Popular Brands',
      sneakers: 'Sneakers',
      shoes: 'Shoes',
      popular: 'Popular brand',
      
    },
    fr: {
      recommended: 'Recommandé pour vous',
      trending: 'Sneakers tendance',
      popular: 'Marques populaires',
      sneakers: 'Baskets',
      shoes: 'Chaussures',
      popular: 'Marque populaire',
    },
  };
  
  
  return (
    <div className="home">

      <Navbar />

      <div className="quick_click_3">
        <div className="container">
          <Link to="/sneakers" className="navbar-link Sneakersq-link">
            <div className="text-q">{translations[language].sneakers}</div>
          </Link>

          <Link to="/shoes" className="navbar-link Shoesq-link">
            <div className="text-q">{translations[language].shoes}</div>
          </Link>

          <a href="#popular_brands-3" className="navbar-link Popularq-link">
            <div className="text-q">{translations[language].popular}</div>
          </a>
        </div>
      </div>



      <Carousel />


      <div className="home-3">
        <div className="vectors-wrapper-3"></div>
        <div className="text-h">{translations[language].trending}</div>
        <div className="recommended-3">
          {contents1.slice(0, 3).map(content => (
            <Products
              key={content.id}
              image={content.image}
              name={content.name[language]}
              price={content.price}
              
            />
          ))}
        </div>
        <div className="text-h">{translations[language].trending}</div>
        <div className="trending_sneakers-3">
          {contents1.slice(3, 6).map(content => (
            <Products
              key={content.id}
              image={content.image}
              name={content.name[language]}
              price={content.price}
              
            />
          ))}
        </div>
        <div className="text-h">{translations[language].popular}</div>
        <div id="popular_brands-3" className="popular_brands-3">
          {brand_nav.map(product => (
            <Link to={`/sneakers/${product.id}`} key={product.id}>
              <img src={product.image} alt={product.productType} />
            </Link>
          ))}
        </div>
      </div>




      <Footer />










    </div>
  );
};

export default Home;
