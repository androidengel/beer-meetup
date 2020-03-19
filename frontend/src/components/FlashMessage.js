import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlashStyles = styled.div`
  padding: 2rem;
  background: #ededed;
  border: 1px solid #ededed;
  border-left: 5px solid ${(props) => (props.type === 'success' ? '#21cf4f' : '#eb1515')};
`;

const FlashMessage = ({ flash }) => {
  if (!flash) return null;
  return (
    <FlashStyles>
      <p>
        <strong>{flash.message}</strong>
      </p>
    </FlashStyles>
  );
};

FlashMessage.defaultProps = {
  flash: {},
};

FlashMessage.propTypes = {
  flash: PropTypes.object,
};

export default FlashMessage;
