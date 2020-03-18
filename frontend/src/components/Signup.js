import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import useForm from '../lib/useForm';


const Signup = (props) => {
  const { inputs, handleChange } = useForm({
    fname: '',
    lname: '',
    email: '',
    password: '',
    pwconfirm: '',
  });

  const submitForm = (e) => {
    e.preventDefault();
    axios.post('http://localhost:7777/signup/1234', inputs)
      .then((res) => props.history.push('/')); // TODO add if/then to push to success vs failure
  };

  return (
    <div className="whole-form">
      <h2>New Member Signup</h2>
      <form className="card" onSubmit={submitForm}>
        <label htmlFor="fname">
            First Name
          <input type="text" name="fname" value={inputs.fname} onChange={handleChange} required />
        </label>
        <label htmlFor="last-name">
            Last Name
          <input type="text" name="lname" value={inputs.lname} onChange={handleChange} required />
        </label>
        <label htmlFor="email">
            Email
          <input type="email" name="email" value={inputs.email} onChange={handleChange} required />
        </label>
        <label htmlFor="password">
            Password
          <input type="password" name="password" value={inputs.password} onChange={handleChange} required />
        </label>
        <label htmlFor="password-confirm">
            Confirm Password
          <input type="password" name="pwconfirm" value={inputs.pwconfirm} onChange={handleChange} required />
        </label>
        <input type="submit" value="Signup" className="button" />
      </form>
    </div>
  );
};

export default Signup;
