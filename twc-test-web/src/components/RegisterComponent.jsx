import React from 'react'

const RegisterComponent = () => {
  return (
    <div>
        <div className=' w-477 h-469 mt-95 ml-122'>
            <div className='p-2 mt-0 ml-0 w-353 h-73'>
                <p className='text-5xl font-bold text-custom-501 '>Register Now!</p>
            </div>
            <div>
            <input
                type="text"
                name="e-mail"
                placeholder="e-mail"
                value=''
                onChange=''
                className="mt-40 rounded-full pl-41 bg-custom-501 text-custom-500 w-477 h-55"
                required
            />
            </div>
            <div>
            <input
                type="text"
                name="create password"
                placeholder="create password"
                value=''
                onChange=''
                className="rounded-full pl-41 bg-custom-501 text-custom-500 mt-38 w-477 h-55"
                required
            />        
            </div>
            <div>
            <input
                type="text"
                name="confirm password"
                placeholder="confirm password"
                value=''
                onChange=''
                className="rounded-full pl-41 bg-custom-501 text-custom-500 mt-38 w-477 h-55"
                required
            />
            </div>
            <div className='h-48 ml-0 text-center border rounded-full text-custom-501 w-149 mt-67'>
                <p className='py-1 text-2xl'>register</p>
            </div>
                  
       </div>
       <div className=' w-177 h-50 mt-38 text-custom-501 ml-122'>
       <a href="/login" className="text-center underline ">&lt; Back to login</a>


       </div>

        
    </div>
  )
}

export default RegisterComponent