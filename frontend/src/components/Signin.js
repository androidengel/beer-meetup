import React, { useState } from 'react';
import axios from 'axios';

const Signin = () => {
  const submitForm = () => {

  };

  return (
    <div className="whole-form">
      <h2>Sign In</h2>
      <form className="card" onSubmit={submitForm}>
        <label htmlFor="email">
          Email Address
          <input type="email" name="email" required />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="password" required />
        </label>
        <input type="submit" value="Sign In" className="button" />
      </form>
    </div>
  );
};

export default Signin;
