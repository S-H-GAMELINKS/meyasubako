import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import IndexPage from './pages/IndexPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
