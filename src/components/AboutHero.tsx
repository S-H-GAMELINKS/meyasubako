import React from 'react';
import 'bulma/css/bulma.min.css';
import { Hero, Heading } from 'react-bulma-components';

export const AboutHero: React.FC = () => {
    return (
        <Hero size='large'>
            <Hero.Header className='mt-5'>
                <Heading>浜田市目安箱とは?</Heading>
            </Hero.Header>
            <Hero.Body>
                浜田市目安箱についての良い感じの説明
            </Hero.Body>
        </Hero>
    )
}
