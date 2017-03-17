import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                OTPAcademy
              </Navbar.Brand>
              <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <IndexLinkContainer to={{ pathname: '/' }}>
                  <NavItem eventKey={1}>Home</NavItem>
                </IndexLinkContainer>

                <LinkContainer to={{ pathname: '/auth' }}>
                  <NavItem eventKey={2}>Login/Sign Up</NavItem>
                </LinkContainer>
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