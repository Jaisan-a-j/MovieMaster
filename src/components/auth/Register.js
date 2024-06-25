import React, { useState } from 'react';
import '../../styles/Register.css'; // Ensure correct path to Register.css

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Register submitted', formData);
    // Add logic here to handle form submission (e.g., API call, state update, etc.)
  };

  const { username, email, password } = formData; // Destructure formData for easier access

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
