import './App.css';
import Header from './components/Header';
import Hero from './components/HeroSection';
import Specials from './components/Specials';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header />

    <main>
      <Hero />
      <Specials />
    </main>

    <Footer />
    </>
  );
}

export default App;