import React from 'react'

const LogingComponent = () => {
  return (
    <div className=' w-477 h-487 mt-140 ml-122 text-custom-501'>
       <div className='mt-0 ml-0 w-253 h-157'>
            <p className='text-5xl '>Hi there,</p>
            <p className='text-2xl '>Welcome to our</p>
            <p className='text-2xl '>contacts portal</p>
       </div>
       <div>
            <input
                type="text"
                name="e-mail"
                placeholder="e-mail"
                value=''
                onChange=''
                className="rounded-full pl-41 bg-custom-501 mt-67 w-477 h-55"
                required
            />
                  
       </div>
       <div>
            <input
                type="text"
                name="password"
                placeholder="password"
                value=''
                onChange=''
                className="rounded-full pl-41 bg-custom-501 mt-38 w-477 h-55"
                required
            />
                  
       </div>
       <div className='flex mt-57 h-50'>
            <div className='pt-4 text-center border rounded-full w-131'>
                <p>login</p>
            </div>
            <div className=' w-281 ml-18'>
              <p className='pt-4 '>or  <a href="/register" className='underline '>Click here to Register</a></p>
            </div>
       </div>
    </div>
  )
}

export default LogingComponent