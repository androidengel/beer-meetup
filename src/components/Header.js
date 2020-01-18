import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import NavLink from './NavLink';
import NavStyles from './styles/NavStyles'

const StyledHeader = styled.header`
  display: block;
  text-align: center;
  position: fixed;
  background: black;
  width: 100%;
`;

const Logo = styled.h1`
  margin: auto 0;
  font-size: 3.5rem;
`;

class Header extends React.Component {
  state = {
    logo: 0,
    navLinks: {
      beers: 0,
      meetings: 0,
      members: 0,
      account: 0
    }
  }

  refreshNavs = () => ({ beers: 0, meetings: 0, members: 0, account: 0 });

  componentDidMount = () => {
    // use current path to determine if any nav links should be highlighted
    const currentRoute = this.props.location.pathname;
    const activeLink = currentRoute.replace('/','');
    const freshNavs = this.refreshNavs();
    freshNavs[activeLink] = 1;
    this.setState({ navLinks: freshNavs })
  }

  deactivateLinks = () => {
    this.setState({ navLinks: this.refreshNavs() })
  }
    
  activateLink = (slug) => {
    const updatedLinks = this.refreshNavs();
    updatedLinks[slug] = 1;
    this.setState({ navLinks: updatedLinks })
  }

  render() {
    return (
      <StyledHeader>
        <Logo><Link to="/" onClick={this.deactivateLinks}>BEER MEETUP</Link></Logo>
        <NavStyles>
          {Object.keys(this.state.navLinks).map((key, index) => {
            const label = `${key.substr(0,1).toUpperCase()}${key.substr(1)}`;
            return <NavLink key={index} slug={key} active={this.state.navLinks[key]} activateLink={this.activateLink} label={label}/>
          })}
        </NavStyles>
      </StyledHeader>
    );
  }
}

export default withRouter(Header);
