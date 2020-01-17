import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import NavLink from './NavLink';
import NavStyles from './styles/NavStyles'
import Nav from './Nav';

const StyledHeader = styled.header`
  display: block;
  text-align: center;
`;

const Logo = styled.h1`
  margin: auto 1.5rem;
  font-size: 3.5rem;
`;

class Header extends React.Component {
  state = {
    // activeRoute: this.params.location.pathname
    logo: 0,
    navLinks: {
      beers: 0,
      meetings: 0,
      members: 0,
      account: 0
    }
  }

  deactivateLink = () => {
    const deactivatedLinks = { beers: 0, meetings: 0, members: 0, account: 0 };
    this.setState( {
      navLinks: deactivatedLinks
    })
  }
    
  activateLink = (slug) => {
    const updatedLinks = { beers: 0, meetings: 0, members: 0, account: 0 };
    updatedLinks[slug] = 1;
    this.setState({
      navLinks: updatedLinks
    })
  }

  render() {
    return (
      <StyledHeader>
        <Logo><Link to="/">BEER MEETUP</Link></Logo>
        <NavStyles>
          {Object.keys(this.state.navLinks).map((key, index) => {
            const label = `${key.substr(0,1).toUpperCase()}${key.substr(1)}`;
            return <NavLink key={index} slug={key} active={this.state.navLinks[key]} activateLink={this.activateLink} label={label}/>
          })}
        </NavStyles>
        {/* <Nav path={this.state.activeRoute} activate={this.handleClick}/> */}
      </StyledHeader>
    );
  }
}

export default withRouter(Header);
