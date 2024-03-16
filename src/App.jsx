// app.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, updateUser } from './redux/actions';

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleAddUser = () => {
    dispatch(addUser({ name, age: parseInt(age) }));
    setName('');
    setAge('');
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  const handleUpdateUser = (id, newName, newAge) => {
    dispatch(updateUser(id, { name: newName, age: newAge }));
  };

  return (
    <div>
      <h2>Add User</h2>
      <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input type="number" value={age} placeholder="Age" onChange={(e) => setAge(e.target.value)} />
      <button onClick={handleAddUser}>Add User</button>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}, {user.age} years old
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            <button onClick={() => handleUpdateUser(user.id, 'New Name', 30)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
