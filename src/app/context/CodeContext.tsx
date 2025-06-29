"use client"

import React, { createContext, ReactNode, useState } from 'react'

type CodeContextType = {
  favorites: number[];
  setFavorites: React.Dispatch<React.SetStateAction<number[]>>;
}; 


interface CodeContextProviderProps {
  children: React.ReactNode;
}

export const CodeContext = createContext<CodeContextType>({
  favorites: [],
  setFavorites: () => {},
});



export const CodeContextProvider: React.FC<CodeContextProviderProps> = (props) => {

    const [favorites, setFavorites] = useState<number[]>([]);
    


    const value={favorites, setFavorites}
  return (
    <CodeContext.Provider value={value}>
        {props.children}
    </CodeContext.Provider>
  )
}
