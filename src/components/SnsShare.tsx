import React from 'react';
import { Container, Columns } from 'react-bulma-components';

import {
    TwitterIcon,
    TwitterShareButton,
    LineShareButton,
    LineIcon,
    FacebookShareButton,
    FacebookIcon,
  } from 'react-share';

export const SnsShare: React.FC = () => {
    const url = window.location.href;
    const title = '浜田市目安箱';

    return (
        <Container>
            <Columns mobile={{gap: 2}} >
                <Columns.Column>
                    <TwitterShareButton url={url} title={title} className="m-3">
                        <TwitterIcon size={32} />
                    </TwitterShareButton>
                    <LineShareButton url={url} title={title} className="m-3">
                        <LineIcon size={32} />
                    </LineShareButton>
                    <FacebookShareButton url={url} title={title} className="m-3">
                        <FacebookIcon size={32} />
                    </FacebookShareButton>
                </Columns.Column>
            </Columns>
        </Container>
    );
} 
