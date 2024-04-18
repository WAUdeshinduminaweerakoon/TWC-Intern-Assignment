import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const RegisterComponent = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.password !== formData.confirmPassword) {
        throw new Error('Password and confirm password do not match');
      }
      const response = await axios.post('http://localhost:3002/register', formData);
      console.log('Registration successful:', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Error registering:', error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='w-477 h-469 mt-95 ml-122'>
          <div className='p-2 mt-0 ml-0 w-353 h-73'>
            <p className='text-5xl font-bold text-custom-501 '>Register Now!</p>
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="e-mail"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-40 rounded-full pl-41 bg-custom-501 text-custom-500 w-477 h-55"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="create password"
              value={formData.password}
              onChange={handleInputChange}
              className="rounded-full pl-41 bg-custom-501 text-custom-500 mt-38 w-477 h-55"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="confirm password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="rounded-full pl-41 bg-custom-501 text-custom-500 mt-38 w-477 h-55"
              required
            />
          </div>
          <div className='h-48 ml-0 text-center border rounded-full text-custom-501 w-149 mt-67'>
            <button type="submit" className='py-1 text-2xl'>Register</button>
          </div>
        </div>
      </form>
      <div className='w-177 h-50 mt-38 text-custom-501 ml-122'>
        <a href="/login" className="text-center underline">&lt; Back to login</a>
      </div>
    </div>
  );
};

export default RegisterComponent;
