import React from 'react';
import '../App.css';
import bruschetta from '../assets/restaurant-food.jpg';
import dessert from '../assets/lemon-dessert.jpg';
import greekSaladImg from '../assets/greek-salad.jpg';

function Specials(){
    return(
        <section className="specials-section">
        <div className="specials-header">
        <h2>This weeks specials!</h2>
        <button className="menu-button">Online Menu</button>
        </div>

        <div className="specials-cards">
        <div className="card">
            <img src={greekSaladImg} alt="Greek Salad" className="card-img" />
            <div className="card-body">
            <div className="card-title-price">
                <h3>Greek salad</h3>
                <span className="price">$12.99</span>
            </div>
            <p>
                The famous greek salad of crispy lettuce, peppers, olives and our 
                Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
            </p>
            <a href="#order" className="order-link">Order a delivery 🛵</a>
            </div>
        </div>

        <div className="card">
            <img src={bruschetta} alt="Bruschetta" className="card-img" />
            <div className="card-body">
            <div className="card-title-price">
                <h3>Bruchetta</h3>
                <span className="price">$5.99</span>
            </div>
            <p>
                Our Bruschetta is made from grilled bread that has been smeared with 
                garlic and seasoned with salt and olive oil.
            </p>
            <a href="#order" className="order-link">Order a delivery 🛵</a>
            </div>
        </div>

        <div className="card">
            <img src={dessert} alt="Bruschetta" className="card-img" />
            <div className="card-body">
            <div className="card-title-price">
                <h3>Lemon Dessert</h3>
                <span className="price">$5.00</span>
            </div>
            <p>
                This comes straight from grandma's recipe book, every last ingredient 
                has been sourced and is as authentic as can be imagined.
            </p>
            <a href="#order" className="order-link">Order a delivery 🛵</a>
            </div>
        </div>
        </div>
        </section>
    );
}

export default Specials;