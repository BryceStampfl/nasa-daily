import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../nasa-logo.svg';

class Header extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
        Nasa Daily
    </Navbar.Brand>
                </Navbar>
            </div>

        );
    }
}


export default Header;