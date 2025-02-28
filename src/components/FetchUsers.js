import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchUsers = () => {
  // State to store the list of users
  const [users, setUsers] = useState([]);
  // State to store loading state
  const [loading, setLoading] = useState(true);
  // State to store any error
  const [error, setError] = useState('');

  // Fetch users when the component mounts
  useEffect(() => {
    // Axios GET request to fetch users
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);  // Store the users data in state
        setLoading(false);         // Set loading to false once data is fetched
      })
      .catch((error) => {
        setError('Error fetching users');  // Set error if fetching fails
        setLoading(false);
      });
  }, []);  // Empty dependency array, so the effect runs only once when the component mounts

  // Render loading, error, or the list of users
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchUsers;
