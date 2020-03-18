import React from 'react';
import PropTypes from 'prop-types';
import Signup from '../components/Signup';

const SignupPage = (props) => {
  const { history } = props;
  return (
    <div>
      <Signup history={history} />
    </div>
  );
};

SignupPage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default SignupPage;
