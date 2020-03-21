import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import useForm from '../lib/useForm';


const Register = (props) => {
  const { inputs, handleChange } = useForm({
    fname: '',
    lname: '',
    email: '',
    password: '',
    pwconfirm: '',
  });

  const submitForm = (e) => {
    e.preventDefault();
    axios.post('http://localhost:7777/register/1234', inputs)
      .then((res) => {
        if (res && res.status === 200) {
          props.history.push(res.data.session.cookie.path); // successful login
          console.log(res.data.session.flash);
          // TODO add success message
        } else {
          props.history.push('/login');
          // TODO add failure message
          console.log('login failed!');
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="whole-form">
      <h2>New Member Registration</h2>
      <form action="post" className="card" onSubmit={submitForm}>
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
        <input type="submit" value="Sign Up!" className="button" />
      </form>
    </div>
  );
};

Register.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Register;
