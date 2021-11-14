import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import 'animate.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import IndexPage from './pages/IndexPage';
import PrivacyPolicy from './pages/PrivacyPolicy';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
