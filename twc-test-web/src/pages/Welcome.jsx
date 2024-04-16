import React from 'react'
import logo from '../assets/images/02 1.png'
import Logo_Revamp from '../assets/images/TWC_Logo_Revamp_2021 1.png'
import contacts_portal from '../assets/images/contacts portal.png'
import log_out from '../assets/images/bx_log-out-circle.png'


const Welcome = () => {
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
        <div className=' text-custom-501 w-951 h-304 mt-109.43 ml-204'>
           <div className='w-950 h-180 font-weight-700'>
                <div className='text-5xl font-bold text-left font-futura leading-73'><p className='text-5xl '>Welcome,</p>
                </div>
                <p>This is where your contacts will live. Click the button below<br/>to add a new contact.</p>
           </div>
           <div className=' border border-custom-501 rounded-full text-center  h-48.1 w-323 mt-56 p-10 gap-10'>
                <a href="/contacts/new" className="gap-10 p-10 text-2xl">add your first contact</a>

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

export default Welcome