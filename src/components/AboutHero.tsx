import React from 'react';
import { Hero, Container, Section, Heading } from 'react-bulma-components';

export const AboutHero: React.FC = () => {
    return (
        <Hero>
            <Hero.Header className='mt-5'>
                <Heading>浜田市目安箱とは?</Heading>
            </Hero.Header>
            <Hero.Body>
                <Container>
                    <p className="mt-4">浜田市目安箱とは、浜田市若者会議にてアイディアとして出たものを実際にサービスとして開発したものです。</p>
                    <p className="mt-4">「浜田市にこういうものがあったらいいな」「浜田市はこうしたらよくなりそう」という意見を投稿できるサービスです。</p>

                    <p className="mt-4">実名で投稿しても構いませんし、匿名でも投稿できますので、皆様の気軽な声を投稿していただければ幸いです。</p>

                    <p className="mt-4">投稿されたご意見は浜田市若者会議の中で今後の方針決めなどの参考にさせていただきます。なお、投稿されたご意見はそれ以外の用途には使用いたしません。</p>
                </Container>
            </Hero.Body>
        </Hero>
    )
}
