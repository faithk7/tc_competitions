import React from "react";

import { Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { Input, InputGroup } from 'rsuite';
import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';

import { app } from './firebase-config.js';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const styles = {
    width: 300
};

const Login = () => {
    const [visible, setVisible] = React.useState(false);
    const [userEmail, setUserEmail] = React.useState('');
    const [userPassword, setUserPassword] = React.useState('');

    const handleChange = () => {
        setVisible(!visible);
    };

    const handleClickLogin = () => {
        // set up field values
        const userEmailInput = document.getElementById('userEmail').value;
        const userPasswordInput = document.getElementById('userPassword').value;
        const auth = getAuth(app);

        setUserEmail(userEmailInput);
        setUserPassword(userPasswordInput);

        console.log(userEmailInput);
        console.log(userEmail);

        // login, checking whether the username/password pair exists
        signInWithEmailAndPassword(auth, userEmail, userPassword)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('logged in');
            })
            .catch((error) => {
                console.log('failed');
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
        // if not, inform users about that
    }

    return (
        <div>
            <span>User Email</span>
            <InputGroup inside style={styles}>
                <Input id='userEmail' />
            </InputGroup>
            <br />
            <span>User Password</span>
            <InputGroup inside style={styles}>
                <Input id='userPassword' type={visible ? 'text' : 'password'} />
                <InputGroup.Button onClick={handleChange}>
                    {visible ? <EyeIcon /> : <EyeSlashIcon />}
                </InputGroup.Button>
            </InputGroup>
            <br />
            <div>
                <Button appearance="primary" onClick={handleClickLogin}>Login</Button>
                <Button appearance="link">New User? Register a New Account</Button>
            </div>
        </div>
    );
};

export { Login };