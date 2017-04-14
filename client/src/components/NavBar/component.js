import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap/lib';
import { Link } from 'react-router';

export default class NavBar extends Component {
  render() {
    const { username } = this.props;
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