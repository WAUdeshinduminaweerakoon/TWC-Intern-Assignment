import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const NewContactsComponent = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false); // State for tracking submission success

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3002/contact', {
        fullName,
        email,
        phoneNumber,
        gender
      });

      console.log('Contact created successfully:', response.data);
      setSubmitSuccess(true); // Set submit success to true
      setTimeout(() => {
        navigate('/contacts'); // Navigate to Contacts page after a short delay
      }, 2000); // Change delay time as needed
    } catch (error) {
      console.error('Error creating contact:', error.response.data.message);
    }
  };

  return (
    <div className='text-custom-501 w-951 h-304 mt-71.43 ml-204'>
      <div className='w-950 h-180 font-weight-700'>
        <div className='text-5xl font-bold text-left w-324 h-73 font-futura leading-73'>
          <p className='text-5xl '>New Contact</p>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Add success message if submission is successful */}
          {submitSuccess && <p>Submit success! Full: {fullName}</p>}
          <div className='flex'>
            <input
              type="text"
              name="full name"
              placeholder="Full Name"
              value={fullName}
              onChange={handleFullNameChange}
              className="rounded-full pl-41 bg-custom-501 mt-61 w-477 h-55 text-custom-500"
              required
            />
            <input
              type="text"
              name="e-mail"
              placeholder="e-mail"
              value={email}
              onChange={handleEmailChange}
              className="rounded-full pl-41 bg-custom-501 w-477 h-55 mt-61 ml-35 text-custom-500"
              required
            />
          </div>
          <div className='flex'>
            <input
              type="text"
              name="phone number"
              placeholder="phone number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              className="mt-40 rounded-full pl-41 bg-custom-501 w-477 h-55 text-custom-500"
              required
            />
            <div className="flex items-center mt-40 ml-41 w-81 h-50">
              <label>gender</label>
            </div>
            <div className="flex items-center mt-40 ml-103 w-81 h-50">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={handleGenderChange}
                className="mr-1"
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="flex items-center mt-40 ml-103 w-81 h-50 ">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={handleGenderChange}
                className="mr-1"
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <div className='border border-custom-501 rounded-full text-center  h-48.1 w-323 mt-78 p-10 gap-10'>
            <button type="submit" className="gap-10 text-2xl">Add your first contact</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewContactsComponent;

