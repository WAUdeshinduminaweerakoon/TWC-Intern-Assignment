import React from 'react'
import logo from '../assets/images/02 1.png'
import Logo_Revamp from '../assets/images/TWC_Logo_Revamp_2021 1.png'
import contacts_portal from '../assets/images/contacts portal.png'
import log_out from '../assets/images/bx_log-out-circle.png'
import Welcome from './Welcome'

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
      <div className=' flex w-994 h-73 mt-35.43 ml-204  text-custom-501'>
        <div className='mt-0 ml-0 border w-324 h-73'>
          <h1>Contacts</h1>
        </div>
        <div className='h-48 p-10 mt-16 text-center border rounded-full w-255 ml-415'>
            <h3> add new contact</h3>
        </div>

      </div>

      <div className='rounded-xl w-995 h-316 mt-23 ml-204 bg-custom-501'>
        <table>
        <thead className="mt-12 bg-slate-500 w-735 h-50 ml-140">
          <tr >
            <th scope="col" className="">
            </th>
            <th scope="col" className="">
              full name
            </th>
            <th scope="col" className="">
              gender
            </th>
            <th scope="col" className="">
              e-mail
            </th>
            <th scope="col" className="">
              Phone number
            </th>
            <th scope="col" className="">
              
            </th>
          </tr>
        </thead>

        </table>

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