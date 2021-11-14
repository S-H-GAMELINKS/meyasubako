import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import 'animate.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import IndexPage from './pages/IndexPage';
import PrivacyPolicy from './pages/PrivacyPolicy';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
