"use client"

import React, { useContext, useState } from 'react'
import { FaRegRectangleList } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { CodeContext } from '@/app/context/CodeContext';

type Snippet = {
  id: number;
  title: string;
  code: string;
  language: string;
  createdAt: string; // ISO string
  updatedAt: string;
  
};

const Sidebar = ({snippets}:{snippets: Snippet[]}) => {
  const {favorites, setFavorites} = useContext(CodeContext)
  const [showFavoritesOnly, setShowFavoritesOnly] = useState<boolean>(false);


  
  return (
    <div className='h-svh bg-[#FBFFE4] w-full shadow-md pl-10 pt-20'>
      <div >
        <h1 className='text-2xl font-bold'>Quick Links</h1>
        <div className='flex flex-col gap-4 mt-6 '>
          <button className='flex items-center gap-2' > <FaRegRectangleList /> All Snippets</button>
          <button className='flex items-center gap-2'><FaRegHeart /> Favrouite</button>
        </div>
      </div>
      </div>
  )
}

export default Sidebar