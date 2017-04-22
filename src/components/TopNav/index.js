import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class TopNav extends  Component {

  render() {
    return(
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">ExtentX</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        {/*<Navbar.Collapse>*/}
          {/*<Nav>*/}
            {/*<NavItem eventKey={1} href="#">Link</NavItem>*/}
            {/*<NavItem eventKey={2} href="#">Link</NavItem>*/}
          {/*</Nav>*/}
        {/*</Navbar.Collapse>*/}
      </Navbar>
    );
  }

}

export default TopNav;
