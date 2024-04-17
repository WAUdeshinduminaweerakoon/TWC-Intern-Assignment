import React from 'react'

const WelcomeComponents = () => {
  return (
    <div className='text-custom-501 w-951 h-304 mt-109.43 ml-204'>
        <div className='w-950 h-180 font-weight-700'>
          <div className='text-5xl font-bold text-left font-futura leading-73'>
            <p className='text-5xl'>Welcome,</p>
          </div>
          <p>This is where your contacts will live. Click the button below<br/>to add a new contact.</p>
        </div>
        <div className='border border-custom-501 rounded-full text-center h-48.1 w-323 mt-56 p-10 gap-10'>
          <a href="/contacts/new" className="gap-10 p-10 text-2xl">add your first contact</a>
        </div>
      </div>
  )
}

export default WelcomeComponents