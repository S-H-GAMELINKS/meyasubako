import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import { Container, Form, Button } from 'react-bulma-components';

export const OpinionForm: React.FC = () => {
    const [userName, setUserName] = useState('');
    const [opinion, setOpinion] = useState('');
    const [mailAddress, setMailAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <Container className="p-3">
            <Form.Field>
                <Form.Label>お名前</Form.Label>
                <Form.Control>
                    <Form.Input
                        color="success"
                        value={userName}
                        onChange={(e: any) => {
                            return setUserName(e.target.value);
                        }}
                    >
                    </Form.Input>
                </Form.Control>
            </Form.Field>

            <Form.Field>
                <Form.Label>ご意見</Form.Label>
                <Form.Control>
                    <Form.Textarea
                        color="success"
                        value={opinion}
                        onChange={(e: any) => {
                            return setOpinion(e.target.value);
                        }}
                    >
                    </Form.Textarea>
                </Form.Control>
            </Form.Field>

            <Form.Field>
                <Form.Label>メールアドレス</Form.Label>
                <Form.Control>
                    <Form.Input
                        color="success"
                        value={mailAddress}
                        onChange={(e: any)  => {
                            return setMailAddress(e.target.value);
                        }}
                    >
                    </Form.Input>
                </Form.Control>
            </Form.Field>

            <Form.Field>
                <Form.Label>電話番号</Form.Label>
                <Form.Control>
                    <Form.Input
                        color="success"
                        value={phoneNumber}
                        onChange={(e: any) => {
                            return setPhoneNumber(e.valuetarget.value);
                        }}
                    >
                    </Form.Input>
                </Form.Control>
            </Form.Field>

            <Form.Field className="mt-5">
                <Form.Control>
                    <Button color="success">ご意見を投稿</Button>
                </Form.Control>
            </Form.Field>
        </Container>
    )
}