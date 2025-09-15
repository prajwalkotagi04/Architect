import React from 'react'
import { projects1, projects10, projects2, projects3, projects4, projects5, projects6, projects7, projects8, projects9 } from '../../assets/images'

export default function Project() {
  return (
    <>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 px-5 md:px-20 py-10 md:py-24'>
            <img src={projects1} alt="projects" className='w-[100%] h-40 md:h-90 object-cover'/>
            <img src={projects2} alt="projects"  className='w-[100%] h-40 md:h-90 object-cover'/>
            <img src={projects3} alt="projects"  className='w-[100%] h-40 md:h-90 object-cover'/>
            <img src={projects4} alt="projects"  className='w-[100%] h-40 md:h-90 object-cover'/>
            <img src={projects5} alt="projects"  className='w-[100%] h-40 md:h-90 object-cover'/>
            <img src={projects6} alt="projects"  className='w-[100%] h-40 md:h-90 object-cover'/>
            <img src={projects7} alt="projects"  className='w-[100%] h-40 md:h-90 object-cover'/>
            <img src={projects8} alt="projects"  className='w-[100%] h-40 md:h-90 object-cover'/>
            <img src={projects9} alt="projects"  className='w-[100%] h-40 md:h-90 object-cover'/>
            <img src={projects10} alt="projects" className='w-[100%] h-40 md:h-90 object-cover' />

        </div>
    </>
  )
}
