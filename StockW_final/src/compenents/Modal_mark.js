import React from 'react';
import style from './Modal.css'

const Modal_mark = ({ isOpen, title, message,onCancel }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <h2>{title}</h2>
                <p>{message}</p>
                <div className="modal-buttons">
                
                    <button onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Modal_mark;
