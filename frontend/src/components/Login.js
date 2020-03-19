import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const submitForm = () => {

  };

  return (
    <div className="whole-form">
      <h2>Login</h2>
      <form action="post" className="card" onSubmit={submitForm}>
        <label htmlFor="email">
          Email Address
          <input type="email" name="email" required />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="password" required />
        </label>
        <input type="submit" value="Login" className="button" />
      </form>
    </div>
  );
};

export default Login;
