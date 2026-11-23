import React from 'react';
import '../App.css';
import chefs1 from '../assets/chefs-1.jpg';
import { Link } from 'react-router-dom';

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
        <Link to="/booking">
            <button className="cta-button">Reserve a Table</button>
        </Link>
        </div>
        <div className="hero-image">
        {}
        <img src={chefs1} alt="Greek Salad" className="hero-img" />
        </div>
    </section>
    );
}

export default HeroSection;