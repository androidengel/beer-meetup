import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonRow = styled.div`
  display: flex;
  flex-direct: row;
  justify-content: center;
`;

class PageOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      route: PropTypes.string,
      component: PropTypes.func,
      label: PropTypes.string,
      active: PropTypes.number,
    })),
    optionClicked: PropTypes.func
  }
  render() {
    return (
      <ButtonRow>
        {this.props.options.map((option, index) => (
          <Link to={option.route} key={index}>
            <button className="button" onClick={() => this.props.optionClicked(option.route, option.component)}>
              {option.label}
            </button>
          </Link>
        ))}
      </ButtonRow>
    )
  }
}

export default PageOptions;
