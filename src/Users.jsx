import React, { useEffect, useState } from 'react';
import User from './User';
import './users.css';


const Users = () => {
    const [users, setUsers] = useState([]);
    console.log(users)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []);


  return (
    <div>
      <h3>Users: {users.length}</h3>
      <div>
      {
        users.map(user => <User
            key={user.id}
            user={user}
            ></User>)
      }
      </div>
    </div>
  )
}

export default Users
