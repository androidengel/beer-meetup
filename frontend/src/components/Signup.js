import React, { useState } from 'react';
import axios from 'axios';


const Signup = () => {
  const [inputs, setInputs] = useState({});

  const submitForm = (e) => {
    e.preventDefault();
    axios.post('http://localhost:7777/signup/1234', inputs)
      .then((res) => console.log(res.data));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div className="whole-form">
      <h2>New Member Signup</h2>
      <form className="card" onSubmit={submitForm}>
        <label htmlFor="fname">
            First Name
          <input type="text" name="fname" onChange={handleChange} required />
        </label>
        <label htmlFor="last-name">
            Last Name
          <input type="text" name="lname" onChange={handleChange} required />
        </label>
        <label htmlFor="email">
            Email
          <input type="email" name="email" onChange={handleChange} required />
        </label>
        <label htmlFor="password">
            Password
          <input type="password" name="password" onChange={handleChange} required />
        </label>
        <label htmlFor="password-confirm">
            Confirm Password
          <input type="password" name="pwconfirm" onChange={handleChange} required />
        </label>
        <input type="submit" value="Signup" className="button" />
      </form>
    </div>
  );
};

export default Signup;
