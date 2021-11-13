import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { AboutHero } from './components/AboutHero';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutHero />
    </div>
  );
}

export default App;
