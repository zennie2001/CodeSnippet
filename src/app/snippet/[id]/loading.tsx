import React from 'react'

const loading: React.FC = () => {
  return (
    <div className='flex flex-col gap-4 pt-6'>
      Loading...
      <div className='w-full h-10 shadow-md rounded-xl'>

      </div>
      <div className='w-full h-100 shadow-md rounded-xl'></div>
    </div>
  )
}

export default loading
