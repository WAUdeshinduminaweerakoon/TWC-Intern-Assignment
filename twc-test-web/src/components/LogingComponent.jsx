import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 


const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3002/Register/login', {
        email,
        password,
      });

      console.log('Login successful:', response.data);
      
      navigate('/'); 
    } catch (error) {
      console.error('Error logging in:', error.response.data.message);
      setError(error.response.data.message);
    }
  };

  return (
    <div className='w-477 h-487 mt-140 ml-122 text-custom-501'>
      <div className='mt-0 ml-0 w-253 h-157'>
        <p className='text-6xl font-bold'>Hi there,</p>
        <p className='pt-3 text-3xl font-bold'>Welcome to our</p>
        <p className='pt-3 text-3xl font-bold'>contacts portal</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="pl-4 rounded-full bg-custom-501 mt-67 w-477 h-55 text-custom-500"
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="pl-4 rounded-full bg-custom-501 mt-38 w-477 h-55 text-custom-500"
            required
          />
        </div>
        <div className='flex mt-57 h-50'>
          <button type="submit" className='pt-0 text-2xl font-bold text-center border rounded-full w-131'>
            Login
          </button>
          <div className='w-281 ml-18'>
            <p className='pt-4'>or  <a href="/register" className='underline'>Click here to Register</a></p>
          </div>
        </div>
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </form>
    </div>
  );
}

export default LoginComponent;

