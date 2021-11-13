import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.min.css';
import { Container } from 'react-bulma-components';

import { Header } from './components/Header';
import { AboutHero } from './components/AboutHero';
import { OpinionForm } from './components/OpinionForm';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutHero />
      <Container>
        <hr />

        <OpinionForm />

        <hr />
      </Container>
    </div>
  );
}

export default App;
