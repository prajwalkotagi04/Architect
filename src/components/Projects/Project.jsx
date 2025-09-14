import React from 'react'
import { projects1, projects10, projects2, projects3, projects4, projects5, projects6, projects7, projects8, projects9 } from '../../assets/images'

export default function Project() {
  return (
    <>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-10 px-20 py-24'>
            <img src={projects1} alt="" className='w-[100%] h-90 object-cover'/>
            <img src={projects2} alt=""  className='w-[100%] h-90 object-cover'/>
            <img src={projects3} alt=""  className='w-[100%] h-90 object-cover'/>
            <img src={projects4} alt=""  className='w-[100%] h-90 object-cover'/>
            <img src={projects5} alt=""  className='w-[100%] h-90 object-cover'/>
            <img src={projects6} alt=""  className='w-[100%] h-90 object-cover'/>
            <img src={projects7} alt=""  className='w-[100%] h-90 object-cover'/>
            <img src={projects8} alt=""  className='w-[100%] h-90 object-cover'/>
            <img src={projects9} alt=""  className='w-[100%] h-90 object-cover'/>
            <img src={projects10} alt="" className='w-[100%] h-90 object-cover' />

        </div>
    </>
  )
}
