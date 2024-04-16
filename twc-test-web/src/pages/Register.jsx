import React from 'react'
import backgroundImage from '../assets/images/back.png';

const Register = () => {
  return (
    <div className="flex h-screen">
    <div className="flex w-1/2 bg-custom-500 ">
      <div className="w-477 h-487 top-140 left-122 border-custom-501 rounded-tl-2xl">
        
      </div>
    </div>
    <div
      className="relative w-1/2 bg-cover rounded-r-xl"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        opacity: 10,
      }}
    >
    </div>
  </div>
  )
}

export default Register