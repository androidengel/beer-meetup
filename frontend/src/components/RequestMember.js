import React from 'react';
import styled from 'styled-components';

const RequestMember = () => (
  <div className="whole-form">
    <h2>New Member Request</h2>
    <form className="card">
      <label htmlFor="name">
        New Member Name
        <input type="text" id="name" name="name" required />
      </label>
      <label htmlFor="email">
        New Member Email
        <input type="email" id="email" name="email" />
      </label>
      <label htmlFor="description">
        What makes this person a good fit?
        <textarea id="description" name="description" />
      </label>
      <input type="submit" value="Submit Request" className="button" />
    </form>
  </div>
);

export default RequestMember;
