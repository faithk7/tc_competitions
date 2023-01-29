import React from "react";

import { Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { Panel, Placeholder } from 'rsuite';
import { Input, InputGroup } from 'rsuite';
import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';

import { app } from './firebase-config.js';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'


import { MyNavbar } from "./navbar";

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
}

const MyPanel = () => (
    <Panel header="Panel title" bordered>
        <Placeholder.Paragraph />
        <hr />
        <InputLogin></InputLogin>
        <br /><br />
        <InputRegister></InputRegister>
    </Panel>
);

const styles = {
    width: 300
};

const InputLogin = () => {
    const [visible, setVisible] = React.useState(false);

    const handleChange = () => {
        setVisible(!visible);
    };
    return (
        <div>
            <span>User Login Name</span>
            <InputGroup inside style={styles}>
                <Input/>
            </InputGroup>
            <br />
            <span>User Password</span>
            <InputGroup inside style={styles}>
                <Input type={visible ? 'text' : 'password'} />
                <InputGroup.Button onClick={handleChange}>
                    {visible ? <EyeIcon /> : <EyeSlashIcon />}
                </InputGroup.Button>
            </InputGroup>
            <br />
            <div>
                <Button appearance="primary">Login</Button>
                <Button appearance="link">New User? Register a New Account</Button>
            </div>
        </div>
    );
};


const InputRegister = () => {
    const [visible, setVisible] = React.useState(false);
    const [userLoginName, setUserLoginName] = React.useState('');
    const [userEmail, setUserEmail] = React.useState('');
    const [userPassword, setUserPassword] = React.useState('');

    const handleChange = () => {
        setVisible(!visible);
    };

    // const handleUserLoginName = (string) => {
    //     console.log(document.getElementById("test"));
    //     setUserLoginName(string);
    // };

    const handleClickRegister = () => {
        setFormFields();
    };

    const setFormFields = () => {
        const userLoginNameInput = document.getElementById('userLoginName').value;
        const userEmailInput = document.getElementById('userEmail').value;
        const userPasswordInput = document.getElementById('userPasswordInput').value;
        const userPasswordReInput = document.getElementById('userPasswordReInput').value;

        // TODO: if any of the fields is empty, notify users about the empty fields

        // TODO: check whether the two passwords are the same, if not, output
        // the error dialog

        setUserLoginName(userLoginNameInput);
        setUserEmail(userEmailInput);
        setUserPassword(userPasswordInput);

        console.log(userLoginName);
        console.log(userEmailInput);
        console.log(userPassword);

        // begin the authentication process
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, userEmail, userPassword);
    };



    // function delay(time) {
    //     return new Promise(resolve => setTimeout(resolve, time));
    //   }

    return (
        <div>
            <span>User Login Name</span>
            <InputGroup inside style={styles}>
                <Input id='userLoginName' />
            </InputGroup>
            <br />
            <span>User Email</span>
            <InputGroup inside style={styles}>
                <Input id='userEmail' />
            </InputGroup>
            <br />
            <span>User Password</span>
            <InputGroup inside style={styles}>
                <Input id='userPasswordInput'/>
            </InputGroup>
            <br />
            <span>Confirm User Password</span>
            <InputGroup inside style={styles}>
                <Input id='userPasswordReInput' />
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