import React from 'react';
import { Container } from 'react-bulma-components';

import { Header } from '../components/Header';
import { AboutHero } from '../components/AboutHero';
import { OpinionForm } from '../components/OpinionForm';
import { Footer } from '../components/Footer';

const IndexPage: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <AboutHero />
      <Container>
        <hr />

        <OpinionForm />

        <hr />
      </Container>
      <Footer />
    </div>
  );

}

export default IndexPage;
