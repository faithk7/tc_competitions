import React from "react";

import { Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { Panel, Placeholder } from 'rsuite';
import { Input, InputGroup } from 'rsuite';
import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';

import { app } from './firebase-config.js';


import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'


import { MyNavbar } from "./navbar.js";
import { Login } from "./login.js"
import { Register } from "./register.js"


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
            <Route path='/login' element={<Login></Login>}>
            </Route>
            <Route path='/register' element={<Register></Register>}>
            </Route>
        </Routes>
    </Panel>
);

// export default App;
export { MyApp };