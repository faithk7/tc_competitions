// currently using RSuite

import React from "react";
import ReactDOM from "react-dom";
import { Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";

import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';

import { Panel, Placeholder } from 'rsuite';

import { Input, InputGroup } from 'rsuite';

import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';

// import "./styles.css";

function App() {
    return (
        <div className="App">
            {/* <p>Please fork this example, reproduce the problem you are issue.</p> */}
            {/* <Button>React Suite</Button> */}
            <MyNavbar></MyNavbar>
            <hr />
            <MyPanel></MyPanel>
        </div>
    );
}

const MyNavbar = () => (
    <Navbar>
        <Navbar.Brand href="#">RSUITE</Navbar.Brand>
        <Nav>
            <Nav.Item icon={<HomeIcon />}>Home</Nav.Item>
            <Nav.Item>News</Nav.Item>
            <Nav.Item>Products</Nav.Item>
            <Nav.Menu title="About">
                <Nav.Item>Company</Nav.Item>
                <Nav.Item>Team</Nav.Item>
                <Nav.Menu title="Contact">
                    <Nav.Item>Via email</Nav.Item>
                    <Nav.Item>Via telephone</Nav.Item>
                </Nav.Menu>
            </Nav.Menu>
        </Nav>
        <Nav pullRight>
            <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
        </Nav>
    </Navbar>
);

const MyPanel = () => (
    <Panel header="Panel title" bordered>
        <Placeholder.Paragraph />
        <hr />
        <InputLogin></InputLogin>
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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
