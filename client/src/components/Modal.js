import React from 'react';
import './Modal.css'; 

const Modal = ({ children, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>Close</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
