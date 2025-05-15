import React, { useEffect } from 'react';
import './Plane.css'; 

const Plane = () => {
    useEffect(() => {

        const cards = Array.from(document.querySelectorAll(".card"));
        const cardsContainer = document.querySelector("#cards");

        cardsContainer.addEventListener("mousemove", (e) => {
            for (const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        });

    });

    return (
        <div className='plane'>
            <div id='cards'>
                <div className='card'>
                    <div className="card-content">
                        <i className='fas fa-ambulance'></i>
                        <h2>Emergency Service</h2>
                        <p>Contact at <span>03XXXXXXXXX</span></p>
                        <button href="tel:03001234567" id="emergency-number">
                            <i className="fa-solid fa-link"></i>
                            <span>Dial Number</span>
                        </button>
                    </div>
                </div>

                <div className='card'>
                    <div className="card-content">
                        <i className='fas fa-calendar-alt'></i>
                        <h2>Appointment</h2>
                        <button href="#">
                            <i className="fa-solid fa-link"></i>
                            <span> Click here</span>
                        </button>
                    </div>
                </div><div className='card'>
                    <div className="card-content">
                        <i className='fas fa-clock'></i>
                        <h2>Opening Hours</h2>
                        <p>Monday-Friday <span>XX-XX</span></p>
                        <p>Saturday-Sunday <span>XX-XX</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plane;
