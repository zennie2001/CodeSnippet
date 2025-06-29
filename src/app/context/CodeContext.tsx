"use client"

import React, { createContext, ReactNode, useState } from 'react'

type CodeContextType = {
  favorites: number[];
  setFavorites: React.Dispatch<React.SetStateAction<number[]>>;
}; 

export const CodeContext = createContext<CodeContextType>({
  favorites: [],
  setFavorites: () => {},
});





export const CodeContextProvider = ({ children }: { children: ReactNode }) => {

    const [favorites, setFavorites] = useState<number[]>([]);
    


    const value={favorites, setFavorites}
  return (
    <CodeContext.Provider value={value}>
        {children}
    </CodeContext.Provider>
  )
}
