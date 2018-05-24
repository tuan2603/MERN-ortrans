import React, {Component} from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'mdbreact';
import {BrowserRouter as Router} from 'react-router-dom';


class NavbarFeatures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Router>
        <Navbar color="indigo" dark expand="lg">
          <NavbarBrand href="/">
            <strong>Navbar</strong>
          </NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick}/>}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav>
              <NavItem active>
                <NavLink className="nav-link" to="#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="#">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="#">Pricing</NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </Router>
    );
  }
}

export default NavbarFeatures;
