
import { Navbar, Nav } from 'rsuite';
// import HomeIcon from '@rsuite/icons/legacy/Home';
// import CogIcon from '@rsuite/icons/legacy/Cog';
import UserInfoIcon from '@rsuite/icons/UserInfo';
import DashboardIcon from '@rsuite/icons/Dashboard';

const MyNavbar = () => (
    <Navbar>
        <Navbar.Brand href="#">Home</Navbar.Brand>
        {/* <Nav>
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
        </Nav> */}
        <Nav pullRight>
            <Nav.Item icon={<UserInfoIcon />}>User Profile</Nav.Item>
            <Nav.Item icon={<DashboardIcon />}>Create Learning Space</Nav.Item>
        </Nav>
    </Navbar>
);

export { MyNavbar };