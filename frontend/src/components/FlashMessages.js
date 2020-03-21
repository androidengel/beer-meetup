import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlashStyles = styled.div`
  max-width: 700px;
  margin: auto;
  color: #333;
  text-align: left;
`;

const Flash = styled.p`
  padding: 1.5rem;
  margin: 1rem;
  background: #ededed;
  font-size: 1.6rem;
  &:hover {
    cursor: pointer;
  }
`;

const removeFlash = (e) => {
  const { className } = e.target;
  console.log(className);
  // setFlashes()
};

const FlashMessages = ({ flash = {} }) => {
  const [flashes, setFlashes] = useState(flash);

  if (!flashes) return null;
  const categories = Object.keys(flashes);
  return (
    <div>
      <FlashStyles>
        {categories.map((category) => (
          flashes[category].map((message, index) => (
            <Flash className={category} key={index} onClick={removeFlash}>
              <strong>{message}</strong>
            </Flash>
          ))
        ))}
      </FlashStyles>
    </div>
  );
};

FlashMessages.defaultProps = {
  flash: {},
};

FlashMessages.propTypes = {
  flash: PropTypes.object,
};

export default FlashMessages;
