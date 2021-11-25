import React from 'react';
import { Container } from 'react-bulma-components';

import { AboutHero } from '../components/AboutHero';
import { OpinionForm } from '../components/OpinionForm';
import { SnsShare } from '../components/SnsShare';

const IndexPage: React.FC = () => {
  return (
    <div className="App">
      <AboutHero />
      <Container>
        <hr />

        <OpinionForm />

        <SnsShare />

        <hr />
      </Container>
    </div>
  );

}

export default IndexPage;
