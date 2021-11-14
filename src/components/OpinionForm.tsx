import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import sha256 from 'crypto-js/sha256';
import { Container, Form, Button } from 'react-bulma-components';
import { toast, ToastType } from 'bulma-toast'

export const OpinionForm: React.FC = () => {
    const [userName, setUserName] = useState('');
    const [opinion, setOpinion] = useState('');
    const [mailAddress, setMailAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const firebaseConfig = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_DB_URL,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGEING_SENDER_ID,
        appId: process.env.REACT_APP_APP_ID
    };

    const app = initializeApp(firebaseConfig);

    const showToast = (message: string, type: ToastType | undefined): void => {
        toast({
            message: message,
            type: type,
            position: 'center',
            closeOnClick: true,
            duration: 2000,
            animate: { in: 'fadeIn', out: 'fadeOut' },
        })
    }

    const validation = (): boolean => {
        if (opinion === '') {
            showToast('ご意見は必ず入力してください', 'is-danger');
            return false;
        }
        return true;
    }

    const clear = (): void => {
        setUserName('');
        setOpinion('');
        setMailAddress('');
        setPhoneNumber('');
    }

    const submit = (): void => {

        const isValid = validation();

        if (!isValid) {
            return;
        }

        const date = new Date();
        const db = getDatabase(app);

        set(ref(db, 'opinions/' + sha256(date.toString())), {
            userName: userName,
            opinion: opinion,
            email: mailAddress,
            phoneNumber: phoneNumber,
            date: date.toString()
        });

        clear();
        showToast('ご意見を承りました！', 'is-success');
    }

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
                            return setPhoneNumber(e.target.value);
                        }}
                    >
                    </Form.Input>
                </Form.Control>
            </Form.Field>

            <Form.Field className="mt-5">
                <Form.Control>
                    <Button color="success" onClick={submit}>ご意見を投稿</Button>
                </Form.Control>
            </Form.Field>
        </Container>
    )
}