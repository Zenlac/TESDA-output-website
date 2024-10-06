import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Pros from './components/Pros';
import Flavors from './components/Flavors';
import Online from './components/Online';
import Menu from './components/Menu';
import New from './components/New';
import Customer from './components/Customer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Cards/>
      <Pros/>
      <Flavors/>
      <Online/>
      <Menu/>
      <New/>
      <Customer/>
      <Footer/>
    </div>
  );
}

export default App;
