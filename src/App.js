import './App.css';
import chefs1 from './assets/chefs-1.jpg';
import bruschetta from './assets/restaurant-food.jpg';
import dessert from './assets/lemon-dessert.jpg';
import greekSaladImg from './assets/greek-salad.jpg';


function App() {
  return (
    <>
      {/* Header & Navigatie */}
      <header className="header">
        <div className="logo-container">
          <span className="logo-text">LITTLE LEMON</span>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Sectie */}
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

        {/* Specials Sectie */}
        <section className="specials-section">
          <div className="specials-header">
            <h2>This weeks specials!</h2>
            <button className="menu-button">Online Menu</button>
          </div>

          <div className="specials-cards">
            {/* Kaart 1: Greek Salad */}
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

            {/* Kaart 2: Bruchetta */}
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

            {/* Kaart 3: Lemon Dessert */}
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
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Little Lemon Restaurant. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;