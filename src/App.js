import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchUsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data);
      })

  }, []);

  return (
    
    <div>
      

      <h1>FETCH AND DISPLAY USER</h1>

      <table border="2" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
          <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>

          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchUsersTable;
