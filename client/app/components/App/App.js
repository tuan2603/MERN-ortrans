import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, Footer, NavLink } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import '../../styles/index.css';

import Routes from '../../Routes';
import FooterMain from '../Footer/Footer';
import mainLogo from '../../img/logo.gif';


class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      collapsed: false,
    };
    this.handleTogglerClick = this.handleTogglerClick.bind(this);
    this.handleNavbarClick = this.handleNavbarClick.bind(this);

  }

  handleTogglerClick(){
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  handleNavbarClick(){
    this.setState({
      collapsed: false
    });
  }

  render() {
    const collapsed = this.state.collapsed;
    const overlay = <div id="sidenav-overlay" style={{backgroundColor: 'transparent', color: "#fff"}} onClick={this.handleNavbarClick}/>;
    return (
      <Router>
        <div className="flyout">
          <Navbar className="nav-main" expand="md" fixed="top" scrolling>
            <NavbarBrand href="/">
              <img src={ mainLogo } alt="or-trans" height="32" /> OR - TRANS
            </NavbarBrand>
            <NavbarToggler onClick={this.handleTogglerClick}/>
            <Collapse isOpen={this.state.collapsed} navbar>
              <NavbarNav right onClick={this.handleNavbarClick}>
                <NavItem>
                  <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/css">CSS</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/components">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/advanced">Advanced</NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Navbar>
          { collapsed && overlay}
          <main style={{marginTop: '4rem'}}>
            <Routes />
          </main>
          <FooterMain />
        </div>
      </Router>
    );
  }
}

export default App;
