import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class NavLink extends Component {

  static propTypes = {
    slug: PropTypes.string,
    active: PropTypes.number,
    activateLink: PropTypes.func
  }

  render() {
    return (
      <li>
        <LinkStyle 
          to={`/${this.props.slug}`}
          active={this.props.active}
          onClick={() => this.props.activateLink(this.props.slug)}
        >
          {this.props.label}
        </LinkStyle>
      </li>
    );
  }
}

export default NavLink;

const LinkStyle = styled(Link)`
  color: ${props => (props.active ? `red` : `#333`)};
  border-bottom: ${props => (props.active ? `2px solid red` : `none`)};
`;