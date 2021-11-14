import React from 'react';
import { Hero, Heading } from 'react-bulma-components';

export const AboutHero: React.FC = () => {
    return (
        <Hero>
            <Hero.Header className='mt-5'>
                <Heading>浜田市目安箱とは?</Heading>
            </Hero.Header>
            <Hero.Body>
                浜田市目安箱についての良い感じの説明
            </Hero.Body>
        </Hero>
    )
}
