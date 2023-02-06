import React from "react";

import { Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { Input, InputGroup } from 'rsuite';

import { app } from './firebase-config.js';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const styles = {
    width: 300
};

const Register = () => {
    const [visible, setVisible] = React.useState(false);
    // const [userLoginNameErr, setUserLoginNameErr] = React.useState(false);
    // const [visible, setVisible] = React.useState(false);
    // const [visible, setVisible] = React.useState(false);
    const [userLoginName, setUserLoginName] = React.useState('');
    const [userEmail, setUserEmail] = React.useState('');
    const [userPassword, setUserPassword] = React.useState('');

    const handleChange = () => {
        setVisible(!visible);
    };

    const handleUserLoginName = (input) => {
        // console.log(document.getElementById("test"));
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

    const handleUserPasswordReInput = (string) => {
        // console.log(document.getElementById("test"));
        // setUserLoginName(string);
    };

    const handleClickRegister = () => {
        doSanityCheck(); 

        // begin the authentication process
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, userEmail, userPassword);
    };

    const doSanityCheck = () => {
        const validLoginName = new RegExp('^[a-zA-Z]');
        const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
        const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

        // the format of the login name should be correct - shoud not start with the number/special characteter        

        // the format of the user email should be correct

        // the format of the password should be correct

        // the user login name should not be already in the database

        // the user email should not be already in the database

        // the two passwords should be the same

    };

    return (
        <div>
            <span>User Login Name</span>
            <InputGroup inside style={styles}>
                <Input id='userLoginName' onChange={handleUserLoginName}/>
            </InputGroup>
            <br />
            <span>User Email</span>
            <InputGroup inside style={styles}>
                <Input id='userEmailInput' onChange={handleUserEmail}/>
            </InputGroup>
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
            <br />
            <div>
                <Button appearance="primary" onClick={handleClickRegister}>Register</Button>
                <Button appearance="link">Already has an account? Login here</Button>
            </div>
        </div>
    );
};

export { Register };