import React from 'react';

const Modal = ({ isOpen, title, message }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <h2>{title}</h2>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Modal;