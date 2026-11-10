import React from 'react';
import '../App.css';
import chefs1 from '../assets/chefs-1.jpg';

function HeroSection() {
    return (
    <section className="hero-section">
        <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
            We are a family owned Mediterranean restaurant, focused on traditional 
            recipes served with a modern twist.
        </p>
        <button className="cta-button">Reserve a Table</button>
        </div>
        <div className="hero-image">
        {/* Voeg hier straks je afbeelding toe */}
        <img src={chefs1} alt="Greek Salad" className="hero-img" />
        </div>
    </section>
    );
}

export default HeroSection;