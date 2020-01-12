import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';

const StyledHeader = styled.header`
  display: block;
  text-align: center;
`;

const Logo = styled.h1`
  margin: auto 1.5rem;
  font-size: 3.5rem;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo><Link to="/">BEER MEETUP</Link></Logo>
      <Nav />
    </StyledHeader>
  );
}

export default Header;
