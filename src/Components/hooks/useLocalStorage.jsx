import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function useLocalStorage() {
    const [localData, setLocalData] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [] )


    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(localData));
      }, [key, localData]);
    
  return   [localData, setLocalData];
}

export default useLocalStorage
