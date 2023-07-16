import React from 'react';
import style from './Modal.css'
const Modal = ({ isOpen, title, message, onConfirm, onCancel }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <h2>{title}</h2>
                <p>{message}</p>
                <div className="modal-buttons">
                    <button onClick={onConfirm}>Yes</button>
                    <button onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
