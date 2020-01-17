import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavStyles from './styles/NavStyles';

class Nav extends Component {

  static propTypes = {
    path: PropTypes.string,
    activate: PropTypes.func
  }
  
  state = {
    activeLinks: [],
    path: this.props.path
  }

  // state = {
  //   activeLinks: Array(4).fill(0),
  //   path: this.props.path
  // }

  // activateLink = (i) => {
  //   const links = Array(4).fill(0);
  //   links[i] = 1;
  //   this.setState({
  //     activeLinks: links
  //   })
  // }

  render() {
    return (
      <NavStyles>
        <li>
          <LinkStyle to="/beers" isactive={this.state.activeLinks[0]} onClick={() => this.props.activate(1)}>Beers</LinkStyle>
        </li>
        <li>
          <LinkStyle to="/meetings" isactive={this.state.activeLinks[1]} onClick={() => this.props.activate(2)}>Meetings</LinkStyle>
        </li>
        <li>
          <LinkStyle to="/members" isactive={this.state.activeLinks[2]} onClick={() => this.props.activate(3)}>Members</LinkStyle>
        </li>
        <li>
          <LinkStyle to="/account" isactive={this.state.activeLinks[3]} onClick={() => this.props.activate(4)}>Account</LinkStyle>
        </li>
      </NavStyles>
    );
  }
}

export default Nav;

const LinkStyle = styled(Link)`
  color: ${props => (props.isactive ? `red` : `#333`)};
  border-bottom: ${props => (props.isactive ? `2px solid red` : `none`)};
`;