import React from 'react';

const Signup = () => (
  <div className="whole-form">
    <h2>New Member Signup</h2>
    <form className="card" action="/signup" method="POST">
      <label htmlFor="first-name">
          First Name
        <input type="text" name="first-name" required />
      </label>
      <label htmlFor="last-name">
          Last Name
        <input type="text" name="last-name" required />
      </label>
      <label htmlFor="email">
          Email
        <input type="email" name="email" />
      </label>
      <label htmlFor="password">
          Password
        <input type="password" name="password" />
      </label>
      <label htmlFor="password-confirm">
          Confirm Password
        <input type="password" name="password-confirm" />
      </label>
      <input type="submit" value="Signup" className="button" />
    </form>
  </div>
);

export default Signup;
