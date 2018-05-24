import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    {/*<Link to="/">Home</Link>*/}

    {/*<nav>*/}
      {/*<Link to="/helloworld">Hello World</Link>*/}
    {/*</nav>*/}

    <ul className="menu">
      <li ><a href="#"><Link to="/">Home</Link></a></li>
      <li><a href="#"><Link to="/helloworld">Hello World</Link></a></li>
    </ul>

  </header>
);

export default Header;
