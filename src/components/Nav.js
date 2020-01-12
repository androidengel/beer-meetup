import React from 'react';
import { Link } from 'react-router-dom';
import NavStyles from './styles/NavStyles';

function Nav() {
  return (
    <NavStyles>
      <li>
        <Link to="/beer">Beers</Link>
      </li>
      <li>
        <Link to="/meetings">Meetings</Link>
      </li>
      <li>
        <Link to="/members">Members</Link>
      </li>
      <li>
        <Link to="/account">Account</Link>
      </li>
    </NavStyles>
  );
}

export default Nav;
