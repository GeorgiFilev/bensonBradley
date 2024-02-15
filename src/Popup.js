// Popup.js

import React from "react";

const Popup = ({ onClose, dynamicData }) => {


    return (
        <div className="popup">
            <div onClick={onClose} className="overlay"></div>
            <div className="popup-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{dynamicData.title}</h2>
                <p>{dynamicData.content}</p>
                <div className="buttonPopup borderR32">
                    {
                        dynamicData.title === 'Fingerprint' ?
                            <a className="text-decNone white" href="http://bensonbradleyfingerprintingservice.com/" onClick={onClose}>
                                {dynamicData.buttonText}
                            </a>
                            :
                            <a className="text-decNone white" href="#quickOrderSection">
                                {dynamicData.buttonText}
                            </a>
                    }


                </div>
            </div>
        </div>
    );
};

export default Popup;
