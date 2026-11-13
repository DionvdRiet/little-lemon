import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/HeroSection';
import Specials from './components/Specials';
import BookingPage from './components/BookingPage'; // Importeer je nieuwe pagina
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header /> {/* Blijft altijd op elke pagina zichtbaar */}

      <main>
        <Routes>
          {/* Als je op '/' bent, zie je de homepagina */}
          <Route path="/" element={<><Hero /><Specials /></>} />
          
          {/* Als je op '/booking' bent, laadt hij jouw BookingPage */}
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </main>

      <Footer /> {/* Blijft ook altijd zichtbaar */}
    </>
  );
}

export default App;