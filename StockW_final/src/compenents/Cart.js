import React, { useContext, useState } from 'react';
import { ProductContext } from '../compenents/ProductContext';
import Navbar from '../compenents/Navbar.js';
import Footer from '../compenents/Footer.js';
import stlye from './Cart.css';
import { Link, useHistory } from 'react-router-dom';
import Modal from './Modal';


const Cart = () => {
    const history = useHistory();

    const { cart, removeFromCart, updateQuantity } = useContext(ProductContext);
    console.log('Cart:', cart);

    const [modalOpen, setModalOpen] = useState(false);
    const [productToRemove, setProductToRemove] = useState(null);

    const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);
    const subtotal = cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
    );

    const handleCheckout = () => {
        if (cart.length === 0) {
            alert("Opps, there is no item in the cart, you can add item here for!");
        } else {
            history.push("/CheckoutForm");
        }
    };

    const handleRemoveFromCart = (product) => {
        setProductToRemove(product);
        setModalOpen(true);
    };

    const handleConfirmRemoveFromCart = () => {
        removeFromCart(productToRemove);
        setProductToRemove(null);
        setModalOpen(false);
    };

    const handleCancelRemoveFromCart = () => {
        setProductToRemove(null);
        setModalOpen(false);
    };

    return (
        <>
            <Modal
                isOpen={modalOpen}
                title="Remove Item"
                message="Are you sure you want to remove this item from your cart?"
                onConfirm={handleConfirmRemoveFromCart}
                onCancel={handleCancelRemoveFromCart}
            />
            <div className="cart-container">
                <Navbar />
                <div className="cart-your-cart-text">Your Cart</div>
                <div className="shopping-cart">

                    <div className="cart-item-display">
                        {cart.length === 0 ? (
                            <>
                                <h3>Your cart is currently empty</h3>

                                <button onClick={() => history.push("/sneakers")}>Go shopping</button>
                            </>
                        ) : (
                            <div>
                                {cart.map((product) => {
                                    const totalPrice = product.price * product.quantity;
                                    return (
                                        <div key={product.name} className="cart-item">
                                            <div className="item-details">
                                                <img src={product.image} alt={product.name} />

                                            </div>
                                            <div className="item-info">
                                                <div className="item-name">
                                                    {product.name}
                                                </div>

                                                <div className='item-infor'>
                                                    <p>Price: ${product.price}&nbsp;&nbsp;&nbsp;&nbsp;</p>
                                                    <p>Size: {product.size}&nbsp;&nbsp;&nbsp;&nbsp;</p>
                                                    <p>Color: {product.color}</p>

                                                </div>

                                                <div className="item-quantity">
                                                    <button onClick={() => updateQuantity(product, product.quantity - 1)}>
                                                        -
                                                    </button>
                                                    <p>{product.quantity}</p>
                                                    <button onClick={() => updateQuantity(product, product.quantity + 1)}>
                                                        +
                                                    </button>

                                                    <div className="item-price">
                                                        <p>Total Price: ${totalPrice}</p>
                                                    </div>

                                                </div>
                                                <button className="remove-button" onClick={() => handleRemoveFromCart(product)}>
                                                    Remove
                                                </button>
                                            </div>

                                        </div>



                                    );
                                })}

                                <div className='haha'>
                                    <button onClick={() => history.push("/sneakers")}>Continue shopping</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {cart.length > 0 && (
                    <div className="right-checkout-section">

                        <h2>Subtotal</h2>
                        <p>${subtotal}</p>
                        <p>Total Items: {totalQuantity}</p>
                        <button onClick={handleCheckout}>Checkout</button>
                    </div>
                )}



            </div>
        </>
    );
};
export default Cart



