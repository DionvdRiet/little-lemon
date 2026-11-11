import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/HeroSection';
import Specials from './components/Specials';
import Footer from './components/Footer';
// Eventueel kun je BookingPage ook importeren als je die al hebt:
// import BookingPage from './components/BookingPage';

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          {/* De homepagina bevat de Hero en Specials */}
          <Route path="/" element={
            <>
              <Hero />
              <Specials />
            </>
          } />
          {/* Hier komt straks je reserveringspagina */}
          {/* <Route path="/booking" element={<BookingPage />} /> */}
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;