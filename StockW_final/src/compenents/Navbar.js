import styles from './Navbar.css';
import logo from '../images/linkedin_banner_image_1.png';
import cart from '../images/cart-39.png';
import { Link} from 'react-router-dom';

import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const Navbar = () => {


    const { language } = useContext(LanguageContext);

    const translations = {
        en: {
            home: 'Home',
            about: 'About',
            news: 'News',
            login: 'Log in',
            register: 'Register',
        },
        fr: {
            home: 'Accueil',
            about: 'À propos',
            news: 'Actualités',
            login: 'Se connecter',
            register: 'S\'inscrire',
        },
    };

    return (


        <div className="navbar-logo-left w-nav">
            <div className="navbarcontainer w-container">
                <div className="navbar-content">
                    <div className="navbar-brand">
                        <img
                            src={logo}
                            loading="lazy"
                            width="178"
                            height="40"
                            alt=""
                            className="logo"
                        />
                    </div>
                    <nav role="navigation" className="navbar-menu w-nav-menu">
                        <Link to="/Home" className="navbar-link w-nav-link navs-link">
                            <div className="text">{translations[language].home}</div>
                        </Link>
                        <Link to="/About" className="navbar-link w-nav-link navs-link">
                            <div className="text">{translations[language].about}</div>
                        </Link>
                        <Link to="/New" className="navbar-link w-nav-link navs-link">
                            <div className="text">{translations[language].news}</div>
                        </Link>

                        <Link to="/LogIn" className="navbar-button w-nav-link">
                            <div className="login">{translations[language].login}</div>
                        </Link>
                        <Link to="/signup" className="navbar-button w-nav-link">
                            <div className="login">{translations[language].register}</div>
                        </Link>
                        <Link to="/cart">
                            <div className="cart-icon">
                                <img src={cart} className="cart-icon-image" />
                            </div>
                        </Link>
                    </nav>
                </div>

            </div>
        </div>








    );
};

export default Navbar;