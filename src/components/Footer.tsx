import React from 'react';
import { Hero, Container } from 'react-bulma-components';

export const Footer: React.FC = () => {
    return (
        <Hero>
            <Hero.Footer className='mt-5 mb-5'>
                <Container>
                    © 浜田市目安箱
                </Container>
            </Hero.Footer>
        </Hero>
    )
}
