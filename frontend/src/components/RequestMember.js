import React from 'react';

const RequestMember = () => (
  <form method="POST">
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
      <input type="textarea" id="description" name="description" />
    </label>
    <input type="submit" value="Submit Request" />
  </form>
);

export default RequestMember;
