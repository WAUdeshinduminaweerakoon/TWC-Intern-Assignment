import React from 'react'
import backgroundImage from '../assets/images/back.png';
import logo from '../assets/images/Group 1.png'
import bg2 from '../assets/images/bg2.png'

const LoginBgcomponent = ({ children }) => {
  return (
    <div className="relative flex h-screen">
  <div
    className="absolute top-0 left-0 z-10 w-1/2 h-full bg-cover "
    style={{
      backgroundImage: `url(${bg2})`,
      opacity: 0.9,
    }}
  >
    {children}
  </div>
  <div
    className="absolute top-0 right-0 w-3/5 h-full bg-cover rounded-r-xl"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      opacity: 0.9,
    }}
  >
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-321.64 h-216.42">
        <img src={logo} alt="" />
      </div>
    </div>
  </div>
</div>


  )
}

export default LoginBgcomponent