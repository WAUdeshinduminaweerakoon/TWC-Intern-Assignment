import React from 'react'
import backgroundImage from '../assets/images/back.png';
import logo from '../assets/images/Group 1.png'

const LoginBgcomponent = ({ children }) => {
  return (
    <div className="flex h-screen">
    <div className="flex w-1/2 bg-custom-500">
      {children} 
    </div>
    <div
      className="relative w-1/2 bg-cover rounded-r-xl"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        opacity: 10,
      }}
    >
        <div className=' w-321.64 h-216.42 mt-255 ml-191'>
         <img src= {logo} alt='' />

        </div>
        
    </div>
  </div>
  )
}

export default LoginBgcomponent