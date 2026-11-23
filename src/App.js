import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/HeroSection';
import Specials from './components/Specials';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/confirmedBooking';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="app-container">
      <Header /> {}

      <main className="app-main">
        <Routes>
          {}
          <Route path="/" element={<><Hero /><Specials /></>} />
        
          {}
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </main>

      <Footer /> {}
      </div>
    </>
  
  );
}

export default App;