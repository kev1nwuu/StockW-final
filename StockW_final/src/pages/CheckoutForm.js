import React, { useState, useContext } from 'react';
import Stepper from '../compenents/Stepper';
import style from '../pages_css/Checkout.css';
import { useHistory } from 'react-router-dom';
import { ProductContext } from '../compenents/ProductContext';
import Modal from '../compenents/Modal_checkout';

const CheckoutForm = () => {
    const taxRate = 0.1;
    const shippingFee = 5;
    const history = useHistory();
    const [modalOpen, setModalOpen] = useState(false);
    const [step, setStep] = useState(1);

    const { cart } = useContext(ProductContext);

    const [delivery, setDelivery] = useState({
        address: '',
        city: '',
        state: '',
        zip: ''
    });
    const [payment, setPayment] = useState({
        firstName: '',
        lastName: '',
        email: '',
        nameOnCard: '',
        creditCardNumber: '',
        expMonth: '',
        expYear: '',
        cvv: ''
    });

    const handleBack1 = () => {
        history.goBack(); // Go back to the previous page
    };

    const handleDeliveryChange = (e) => {
        setDelivery({ ...delivery, [e.target.name]: e.target.value });
    };

    const handlePaymentChange = (e) => {
        setPayment({ ...payment, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    const handlePlaceOrder = () => {
        setModalOpen(true);
        setTimeout(() => {
            setModalOpen(false);
            history.push('/');
        }, 3000);
    };

    return (
        <>
            <Modal
                isOpen={modalOpen}
                title="Thank You!"
                message="Thank you for your purchase!
                An Confirmation and more details will be sent to your email shortly!"
            />
            <div className="container1">
                <Stepper step={step} />
                {step === 1 && (
                    <div className="form1">
                        <h2>Delivery</h2>
                        <label>
                            Address:
                            <input
                                className="input-field"
                                type="text"
                                name="address"
                                placeholder="Your Address"
                                value={delivery.address}
                                onChange={handleDeliveryChange}
                            />
                        </label>
                        <br />
                        <label>
                            City:
                            <input
                                className="input-field"
                                type="text"
                                name="city"
                                placeholder="Your City"
                                value={delivery.city}
                                onChange={handleDeliveryChange}
                            />
                        </label>
                        <br />
                        <label>
                            State:
                            <input
                                className="input-field"
                                type="text"
                                name="state"
                                placeholder="Your State"
                                value={delivery.state}
                                onChange={handleDeliveryChange}
                            />
                        </label>
                        <br />
                        <label>
                            Zip:
                            <input
                                className="input-field"
                                type="text"
                                name="zip"
                                placeholder="Your Zip Code"
                                value={delivery.zip}
                                onChange={handleDeliveryChange}
                            />
                        </label>
                        <br />
                        <button onClick={handleBack1}>Back</button>
                        <button onClick={handleNext} className="next-button">Next</button>
                    </div>
                )}
                {step === 2 && (
                    <div className="form1">
                        <h2>Payment</h2>
                        <label>
                            First Name:
                            <input
                                className="input-field"
                                type="text"
                                name="firstName"
                                placeholder="Your First Name"
                                value={payment.firstName}
                                onChange={handlePaymentChange}
                            />
                        </label>
                        <br />
                        <label>
                            Last Name:
                            <input
                                className="input-field"
                                type="text"
                                name="lastName"
                                placeholder="Your Last Name"
                                value={payment.lastName}
                                onChange={handlePaymentChange}
                            />
                        </label>
                        <br />
                        <label>
                            Email:
                            <input
                                className="input-field"
                                type="email"
                                name="email"
                                placeholder="Your Email Address"
                                value={payment.email}
                                onChange={handlePaymentChange}
                            />
                        </label>
                        <br />
                        <label>
                            Name on Card:
                            <input
                                className="input-field"
                                type="text"
                                name="nameOnCard"
                                placeholder="Name on Card"
                                value={payment.nameOnCard}
                                onChange={handlePaymentChange}
                            />
                        </label>
                        <br />
                        <label>
                            Credit Card Number:
                            <input
                                className="input-field"
                                type="text"
                                name="creditCardNumber"
                                placeholder="Credit Card Number"
                                value={payment.creditCardNumber}
                                onChange={handlePaymentChange}
                            />
                        </label>
                        <br />
                        <label>
                            Exp Month:
                            <input
                                className="input-field"
                                type="text"
                                name="expMonth"
                                placeholder="Expiration Month"
                                value={payment.expMonth}
                                onChange={handlePaymentChange}
                            />
                        </label>
                        <br />
                        <label>
                            Exp Year:
                            <input
                                className="input-field"
                                type="text"
                                name="expYear"
                                placeholder="Expiration Year"
                                value={payment.expYear}
                                onChange={handlePaymentChange}
                            />
                        </label>
                        <br />
                        <label>
                            CVV:
                            <input
                                className="input-field"
                                type="text"
                                name="cvv"
                                placeholder="CVV"
                                value={payment.cvv}
                                onChange={handlePaymentChange}
                            />
                        </label>
                        <br />
                        <button onClick={handleBack}>Back</button>
                        <button onClick={handleNext} className="next-button">Next</button>
                    </div>
                )}

                {step === 3 && (
                    <div className="form1">
                        <h2>Confirm Order</h2>
                        <div className="product-list">
                            {cart.map((product) => (
                                <div key={product.name}>
                                    <p>
                                        <span>Name:</span> {product.name}
                                    </p>
                                    <p>
                                        <span>Size:</span> {product.size}
                                    </p>
                                    <p>
                                        <span>Quantity:</span> {product.quantity}
                                    </p>
                                    <hr />
                                </div>
                            ))}
                        </div>
                        <h4>Subtotal: ${cart.reduce((total, product) => total + product.price * product.quantity, 0)}</h4>
                        <h4>Tax: ${(cart.reduce((total, product) => total + product.price * product.quantity, 0) * taxRate).toFixed(2)}</h4>
                        <h4>Shipping: ${shippingFee}</h4>
                        <h4>Total: ${(cart.reduce((total, product) => total + product.price * product.quantity, 0) * (1 + taxRate) + shippingFee).toFixed(2)}</h4>
                        <button onClick={handleBack}>Back</button>
                        <button onClick={handlePlaceOrder} className="next-button">Place Order</button>
                    </div>
                )}

            </div>
        </>
    );
};

export default CheckoutForm;
