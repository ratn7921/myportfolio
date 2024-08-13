import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services'; // Corrected import
import Expertise from './components/Expertise';
import Footer from './components/footer';

function App() {
  const [count, setCount] = useState(0); // Included state variable for demonstration

  return (
    <>
      <Header />
      <Banner />
      <About />
      <Services /> {/* Corrected component usage */}
      <Expertise/>
      <Footer/>
    </>
  );
}

export default App;
