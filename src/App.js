import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Header from './component/Header';
import Profile from './component/Profile';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Copyright from './component/Copyright';
import Scrollup from './component/Scrollup';
import PortfolioModels from './component/PortfolioModels';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Profile />
      <About />
      <Contact />
      <Footer />
      <Copyright />
      <Scrollup />
      <PortfolioModels />
    </div>
  );
}

export default App;
