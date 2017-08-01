import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <NavLink to="/" className="navbar-brand">City Guide</NavLink>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/routes" activeClassName="active">My Routes</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
);

export default Header;
