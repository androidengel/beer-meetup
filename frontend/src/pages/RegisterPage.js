import React from 'react';
import PropTypes from 'prop-types';
import Register from '../components/Register';

const RegisterPage = (props) => {
  const { history } = props;
  return (
    <div>
      <Register history={history} />
    </div>
  );
};

RegisterPage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default RegisterPage;
