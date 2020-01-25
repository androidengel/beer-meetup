import React from 'react';

const RequestMember = () => (
  <div>
    <h2>New Member Request</h2>
    <form className="card">
      <label htmlFor="name">
        Name
        <input type="text" id="name" name="name" required />
      </label>
      <label htmlFor="email">
        Email
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
