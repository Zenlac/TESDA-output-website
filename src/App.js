import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Pros from './components/Pros';
import Flavors from './components/Flavors';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Cards/>
      <Pros/>
      <Flavors/>
    </div>
  );
}

export default App;
