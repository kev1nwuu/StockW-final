import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../compenents/ProductContext';
import { Link, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Modal from "../compenents/Modal_mark";

import styles from '../pages_css/Shoes_detail.css';
import Navbar from '../compenents/Navbar.js';
import Footer from '../compenents/Footer.js';
import CustomerReviews from '../compenents/CustomerReviews';
import QA from '../compenents/QA';

const Shoes_detail = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const { selectedProductInfo, addToCart } = useContext(ProductContext);
  const [selectedColor, setSelectedColor] = useState('');


  const sizes = [
    '1',
    '1.5',
    '2',
    '2.5',
    '3',
    '3.5',
    '4',
    '4.5',
    '5',
    '5.5',
    '6',
    '6.5',
    '7',
    '7.5',
    '8',
    '8.5',
    '9',
    '9.5',
    '10',
    '10.5',
    '11',
    '11.5',
    '12',
    '12.5',
    '13',
    '13.5',
    '14',
    '14.5'
  ];
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };


  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };





  if (!selectedProductInfo) {
    return <div>Opps Something went worng back to home!</div>;
  }

  const { name, price, image } = selectedProductInfo;

  
  const togglePopup = () => {
    setModalOpen(!modalOpen);
  };
  //
  const handleAddToCart = () => {
    const product = {
      name,
      image,
      price,
      size: selectedSize,
      color: selectedColor,
      quantity
    };
    console.log('Adding product to cart:', product);
    addToCart(product);
  };


  const handleColorChange = (color) => {
    setSelectedColor(color);
  };



  return (
    <>
      <Modal
        isOpen={modalOpen}
        title="Color Explanation"
        message="This is the explanation for the color selection."

        onCancel={togglePopup}
      />
      <div className="ShoesDetail">
        <Navbar />

        <div className="backArrow1" onClick={() => history.goBack()}><span>&larr;</span></div>


        <div className="productContainer">

          <div className="productImageContainer">
            <div className="backArrow2" onClick={() => history.goBack()}><span>&larr;</span></div>
            <img src={image} alt="product-img" className="productImage" />
          </div>
          <div className="productInfoContainer">
            <h2>{name}</h2>

            <div className="productInfo">
              <p>Price: ${price}</p>

              <div className="color-content">
                <div className="color-header">
                  <h3>Select Color</h3>
                  <div className="questionMark" onClick={togglePopup}>
                    ?
                  </div>
                </div>
                <div className="color-groups">
                  <div className="color color-black" onClick={() => handleColorChange('black')}></div>
                  <div className="color color-white" onClick={() => handleColorChange('white')}></div>
                  <div className="color color-light-gray" onClick={() => handleColorChange('light-gray')}></div>
                </div>


                <div className="size-content">
                  <h3>Select Size</h3>
                  {sizes.map((size, index) => (
                    <>
                      <button
                        key={size}
                        onClick={() => handleSizeChange(size)}
                        style={{
                          fontWeight: selectedSize === size ? 'bold' : 'normal',
                          width: '40px',
                          backgroundColor: 'black',
                          color: 'white',
                          backgroundColor: selectedSize === size ? 'grey' : 'black',
                          color: selectedSize === size ? 'black' : 'white',
                          cursor: 'pointer'
                        }}
                      >
                        {size}
                      </button>
                      {(index + 1) % 4 === 0 && <br />}
                    </>
                  ))}
                </div>


                <div className="quantitySelector">
                  <button className="quantityButton" onClick={handleDecrease}>-</button>
                  <div className="quantityNumber">{quantity}</div>
                  <button className="quantityButton" onClick={handleIncrease}>+</button>
                </div>


                <Link to="/cart">
                  <button className="addToCartButton" onClick={handleAddToCart}>Add to Cart</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {isPopupOpen && (
          <div className="popup">
            <div className="popupContent">
              <h3>Color Explanation</h3>
              <p>If the product has its own color, it will be considered invalid even if the color is selected.</p>
              <button className="closeButton" onClick={togglePopup}>
                Close
              </button>
            </div>
          </div>
        )}

        <div className="productDetails">
          <div className="productDetailsLeft">
            <h3>Product Details:</h3>
            <ul>
              <li>
                <strong>Style:</strong> {name}
              </li>
              <li>
                <strong>Retail Price:</strong> $100
              </li>
              <li>
                <strong>Release Date:</strong> March 2021
              </li>
            </ul>
          </div>
          <div className="productDetailsRight">
            <h3>Product Description:</h3>
            <p>
              Crafted with precision and attention to detail, {name} feature a durable yet lightweight construction that ensures long-lasting wear. The high-quality materials used in their production guarantee both comfort and durability, allowing you to enjoy them for years to come.
              Invest in the superior quality and timeless design of  {name}. Embrace comfort, style, and versatility with every step you take.
            </p>
          </div>
        </div>


        <CustomerReviews />

        <QA />

        <Footer />
      </div>

    </>

  );
};
export default Shoes_detail;
