import React, { useEffect } from 'react'
import { logo } from '../assets/images'
import { Atom } from 'react-loading-indicators'

export default function Loading() {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.reload()
    }, 2000) 

    return () => clearTimeout(timer)  
  }, [])

  return (
    <div className='bg-black transition-opacity opacity-5 w-[100%] h-screen flex items-center justify-center'>
        <Atom color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]} />
    </div>
  )
}
