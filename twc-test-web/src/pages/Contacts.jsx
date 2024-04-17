import React from 'react'
import logo from '../assets/images/02 1.png'
import Logo_Revamp from '../assets/images/TWC_Logo_Revamp_2021 1.png'
import contacts_portal from '../assets/images/contacts portal.png'
import log_out from '../assets/images/bx_log-out-circle.png'

const Contacts = () => {
  return (
    <div className="flex h-768 ">
    <div className="w-full bg-custom-500 ">
      <div className=" w-138 h-91.57 mt-72 ml-204 ">
          <div className=' w-72.94 h-24.03 mt-0 ml-0 flex'>
              <img src={logo} alt="Logo" />
              <img src={Logo_Revamp} alt=''/>
          </div>
          <div>
              <img src={contacts_portal} alt='' />
          </div>
          
      </div>
     
      
      <div className='flex w-133 h-50 mb-31 ml-1180 text-custom-501'>
          <img src={log_out} alt="" />
          <a href="/login" className="gap-10 p-10 text-2xl underline">Logout</a>



      </div>
    </div>
    </div>
  )
}

export default Contacts