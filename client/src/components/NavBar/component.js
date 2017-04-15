import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap/lib';
import { Link } from 'react-router';

export default class NavBar extends Component {
  componentDidMount() {
    this.props.requestSession();
  }
  
  render() {
    const { username, requestLogout } = this.props;
    return (
      <div>
        <div>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to={{ pathname: '/' }}>
                  OTPAcademy
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                { username && <NavItem>Hello { username }</NavItem> }

                <IndexLinkContainer to={{ pathname: '/' }}>
                  <NavItem eventKey={1}>Home</NavItem>
                </IndexLinkContainer>

                {
                  username 
                  ? (
                      <NavItem onClick={requestLogout} eventKey={2}>Logout</NavItem>
                    )
                  : (
                      <LinkContainer to={{ pathname: '/auth' }}>
                        <NavItem eventKey={2}>Login/Sign Up</NavItem>
                      </LinkContainer>
                    )
                }

              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        {
          this.props.children
        }

      </div>
    );
  }
}