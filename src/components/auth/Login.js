import React, { useState } from 'react';
import '../../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login submitted', { email, password });
  };

  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className='form-group'>
        <label>Email:</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='form-group'>
        <label>Password:</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <p className='login-message'>
        Don't have an account? <a href='register'>Register</a>
      </p>
      <button type='submit'>Login</button>
    </form>
  );
};

export default Login;
