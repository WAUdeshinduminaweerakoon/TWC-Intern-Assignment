import React from 'react'

const ContactsDeleteMessage = () => {
  return (
    <div>
    <div className='text-center w-842 h-215 mt-277 ml-262 rounded-xl text-custom-500'>
        <div className='h-10 text-3xl w-721 ml-115'>
          <p className='pt-5'>Do you want to delete the contact “Dion Fernando”?</p>
        </div>
        <div className='flex ml-308'>
          <div className='ml-0 rounded-full mt-78 w-137 h-58 bg-custom-500 text-custom-501'>
              <p className='p-2 text-2xl'>Yes</p>
          </div>
          <div className='border rounded-full mt-78 w-137 h-58 ml-75 text-custom-500'>
              <p className='p-2 text-2xl'>Concel</p>
          </div>
        </div>
    </div>
    </div>
  )
}

export default ContactsDeleteMessage