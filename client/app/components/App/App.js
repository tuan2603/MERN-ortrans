import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav.js';
const App = ({ children }) => (
  <>
    <Header />

    <Nav />

    <main>
      {children}
    </main>

    <Footer />
  </>
);

export default App;
