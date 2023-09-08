import React from 'react';
import './users.css';

const User = ({user}) => {
    console.log(user);
    const {name, email} = user;
  return (
    <div className='box'>
      <h4>Name: {name} </h4>
      <p>email: {email} </p>
    </div>
  )
}

export default User

