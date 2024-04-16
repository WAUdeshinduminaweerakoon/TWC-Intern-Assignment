import React from 'react'
import logo from '../assets/images/02 1.png'
import Logo_Revamp from '../assets/images/TWC_Logo_Revamp_2021 1.png'
import contacts_portal from '../assets/images/contacts portal.png'
import log_out from '../assets/images/bx_log-out-circle.png'


const NewContacts = () => {
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
        <div className=' text-custom-501 w-951 h-304 mt-81.43 ml-204'>
           <div className='w-950 h-180 font-weight-700'>
                <div className='text-5xl font-bold text-left font-futura leading-73'><p className='text-5xl '>New Contact</p>
                </div>
                <div className='flex '>
                <input
                  type="text"
                  name="full name"
                  placeholder="Full Name"
                  value=''
                  onChange=''
                  className="rounded-full pl-41 bg-custom-501 mt-95 w-477 h-55"
                  required
                  />
                  <input
                  type="text"
                  name="e-mail"
                  placeholder="e-mail"
                  value=''
                  onChange=''
                  className="rounded-full pl-41 bg-custom-501 w-477 h-55 mt-95 ml-35"
                  required
                  />
                </div>
                <div className='flex '>
                <input
                  type="text"
                  name="phone number"
                  placeholder="phone number"
                  value=''
                  onChange=''
                  className="mt-40 rounded-full pl-41 bg-custom-501 w-477 h-55"
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
                    className="mr-1"
                  />
                  <label htmlFor="male">Male</label>
                </div>

                <div className="flex items-center mt-40 ml-103 w-81 h-50">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    className="mr-1"
                  />
                  <label htmlFor="female">Female</label>
                 </div>
                  

                </div>
                <div className=' border border-custom-501 rounded-full text-center  h-48.1 w-323 mt-78 p-10 gap-10'>
                <a href="/contacts/new" className="gap-10 p-10 text-2xl">add your first contact</a>

           </div>
            </div>
           
           
         
          
        </div>
        
        <div className='flex w-133 h-50 mt-94 ml-1180 text-custom-501'>
            <img src={log_out} alt="" />
            <a href="/login" className="gap-10 p-10 text-2xl underline">Logout</a>



        </div>
      </div>
      </div>
  )
}

export default NewContacts