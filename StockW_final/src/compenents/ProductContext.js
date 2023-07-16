import React, { createContext, useState } from 'react';


export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  
  const [selectedProductInfo, setSelectedProductInfo] = useState(null);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const selectProduct = (product) => {
    setSelectedProductInfo(product);
  };

  const addToCart = (product) => {
    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(
      (item) => item.name === product.name && item.size === product.size && item.color === product.color
    );
  
    let newCart;
    if (existingProductIndex !== -1) {
      // If the product already exists, update its quantity
      newCart = [...cart];
      newCart[existingProductIndex].quantity += product.quantity;
    } else {
      // If the product does not exist, add it to the cart
      newCart = [...cart, product];
    }
  
    // Save the updated cart to local storage
    localStorage.setItem('cart', JSON.stringify(newCart));
  
    // Update the cart state
    setCart(newCart);
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter(
      (item) =>
        item.name !== product.name ||
        item.size !== product.size ||
        item.color !== product.color
    );
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  };
  
  const updateQuantity = (product, newQuantity) => {
    const newCart = [...cart];
    const productIndex = newCart.findIndex(
      (item) =>
        item.name === product.name &&
        item.size === product.size &&
        item.color === product.color
    );
    if (productIndex !== -1) {
      if (newQuantity === 0) {
        newCart.splice(productIndex, 1);
      } else {
        newCart[productIndex].quantity = newQuantity;
      }
      localStorage.setItem('cart', JSON.stringify(newCart));
      setCart(newCart);
    }
  };

  return (
    <ProductContext.Provider
      value={{ selectedProductInfo, selectProduct, cart, addToCart, removeFromCart,updateQuantity}}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
