import React, {Component} from 'react';
import {BrowserRouter , Route, Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/weather'>weather</Link></li>
            <li><Link to='/todo'>to do</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}



export default Header;
