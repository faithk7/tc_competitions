import React from "react";

import { Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { Panel, Placeholder } from 'rsuite';
import { Input, InputGroup } from 'rsuite';
import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';

import { app } from './firebase-config.js';


import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'


import { MyNavbar } from "./navbar";

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

const MyApp = () => {
    return (
        <div>
            {/* <p>Please fork this example, reproduce the problem you are issue.</p> */}
            {/* <Button>React Suite</Button> */}
            <MyNavbar></MyNavbar>
            <hr />
            <MyPanel></MyPanel>
        </div>
    );
};

const MyPanel = () => (
    <Panel header="Panel title" bordered>
        <Placeholder.Paragraph />
        <hr />
        <Routes>
            <Route path='/login' element={<InputLogin></InputLogin>}>
            </Route>
            <Route path='/register' element={<InputRegister></InputRegister>}>
            </Route>
        </Routes>
    </Panel>
);

const styles = {
    width: 300
};

const InputLogin = () => {
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


const InputRegister = () => {
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

// export default App;
export { MyApp };