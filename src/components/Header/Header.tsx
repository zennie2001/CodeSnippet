import Link from 'next/link';
import React from 'react'
import { HiBars3 } from "react-icons/hi2";
import { PiBracketsCurlyBold } from "react-icons/pi";




const Header: React.FC = () => {
  return (
    <div className='bg-white px-10 sm:px-12 md:px-12 py-4 shadow-md fixed w-full'>
      <div className='flex justify-between items-center'>
        <Link href={'/'}>
        <div className='flex items-center gap-2 text-xl text-[#3D8D7A] cursor-pointer'>
          
          <PiBracketsCurlyBold />
          <p>Snippet</p>
          

        </div>
        </Link>
        <div className='text-2xl'>
          <HiBars3 />

        </div>
      </div>
        
    
    </div>
  )
}

export default Header