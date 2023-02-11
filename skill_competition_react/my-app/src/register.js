import React from "react";

import { Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { Input, InputGroup } from 'rsuite';

import { app } from './firebase-config.js';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import { Message } from './message.js'; 

const styles = {
    width: 300
};

const Register = () => {
    // const [userLoginNameErr, setUserLoginNameErr] = React.useState(false);
    // const [visible, setVisible] = React.useState(false);
    // const [visible, setVisible] = React.useState(false);
    const [userLoginName, setUserLoginName] = React.useState('');
    const [userEmail, setUserEmail] = React.useState('');
    const [userPassword, setUserPassword] = React.useState('');
    const [userPasswordRe, setUserPasswordRe] = React.useState('');

    const [validPassword, setValidPassword] = React.useState(true);
    const [validEmail, setValidEmail] = React.useState(true);
    const [validLoginName, setValidLoginName] = React.useState(true);

    const handleUserLoginName = (input) => {
        // console.log(document.getElementById("test"));

        // check whether the login name is valid; if not, display a warning dialog

        
        // otherwise set the validUserName

        setUserLoginName(input);
        // console.log(userLoginName);
    };

    const handleUserEmail = (input) => {
        setUserEmail(input);
        // console.log(userEmail);
    };

    const handleUserPassword = (input) => {
        // console.log(document.getElementById("test"));
        setUserPassword(input);
        // console.log(userPassword);
    };

    const handleUserPasswordReInput = (input) => {
        // console.log(document.getElementById("test"));
        // setUserLoginName(string);
        setUserPasswordRe(input);
    };

    const handleClickRegister = () => {
        doSanityCheck(); 

        // begin the authentication process
        if (validEmail && validEmail && validPassword) {
            const auth = getAuth(app);
            createUserWithEmailAndPassword(auth, userEmail, userPassword);
        }
    };

    const doSanityCheck = () => {
        const validLoginNamePattern = new RegExp('^[a-zA-Z]');
        const validEmailPattern = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
        const validPasswordPattern = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

        // the format of the login name should be correct - shoud not start with the number/special characteter       
        setValidEmail(validEmailPattern.test(userEmail) ? true : false);

        // the user login name should not be already in the database
        setValidLoginName(validLoginNamePattern.test(userLoginName) ? true : false);

        // TODO: retrieve the email and loginName -- should not already be in the database
        const auth = getAuth(app);


        // the two passwords should be the same
        if (userPassword == userPasswordRe && validPasswordPattern.test(userPassword) && validEmailPattern.test(userPasswordRe)) {
            setValidPassword(true);
        } else {
            setValidPassword(false);
        }
    };

    return (
        <div>
            <span>User Login Name</span>
            <InputGroup inside style={styles}>
                <Input id='userLoginName' onChange={handleUserLoginName}/>
            </InputGroup>
            {
                !validLoginName &&  <Message type="error" style={{visibility: validLoginName ? 'hidden' : 'visible'}}></Message>
            }
            <br />
            <span>User Email</span>
            <InputGroup inside style={styles}>
                <Input id='userEmailInput' onChange={handleUserEmail}/>
            </InputGroup>
            {
                !validEmail && <Message type="error" style={{visibility: validEmail ? 'hidden' : 'visible'}}></Message>
            }
            <br />
            <span>User Password</span>
            <InputGroup inside style={styles}>
                <Input id='userPasswordInput' onChange={handleUserPassword}/>
            </InputGroup>
            <br />
            <span>Confirm User Password</span>
            <InputGroup inside style={styles}>
                <Input id='userPasswordReInput' onChange={handleUserPasswordReInput}/>
            </InputGroup>
            {
                !validPassword && <Message type="error" style={{visibility: validPassword ? 'hidden' : 'visible' }}></Message>
            }
            <br />
            <div>
                <Button appearance="primary" onClick={handleClickRegister}>Register</Button>
                <Button appearance="link">Already has an account? Login here</Button>
            </div>
        </div>
    );
};

export { Register };