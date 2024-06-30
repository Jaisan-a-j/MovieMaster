import React, { useState } from 'react';
import '../../assets/styles/Register.css';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Register submitted', formData);

    try {
      const response = await axios.post(
        'http://localhost:3001/api/auth/createUser',
        formData,
      );
      console.log('User generated:', response.data);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const { username, email, password } = formData;

  return (
    <div>
      <form className='login-form' onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className='form-group'>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            id='username'
            name='username'
            value={username}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <p className='register-message'>
          Already have an account? <a href='login'>Log in</a>
        </p>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Register;
