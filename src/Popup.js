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
                    <a className="text-decNone white" href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0YkZpH3UiD_NLyOuPFBoNFpm5hdORQ9yV9K0ckl5YvRde0wNvU4ogh9zq5ZQ7MR7yI1AYKHrEh">
                        {dynamicData.buttonText}
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Popup;
