import React from 'react'
import { building, building1, building2, building3, building4, building5, building6 } from '../assets/images'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

export default function Footer() {
  return (
    <>
      <div className='block md:flex justify-between px-10 bg-black py-15 mb-[-25px]'>
        <div>
          <h2 className='text-5xl font-bold text-white md:text-9xl'>Let’s Talk.</h2>
          <h4 className='text-xl text-white mt-5 md:text-2xl md:mt-13'>Let’s Make Something Beautiful Together!</h4>
          <div className='block md:flex gap-15 justify-between mt-12'>
            <div className='flex gap-2 my-6 md:my-1'>
              <FaPhoneAlt className='bg-white text-orange-400 text-5xl border rounded-[50%] p-2' />
              <div className='block'>
                <span className='text-gray-400 '>Phone Number</span><br />
                <p className='text-white'>+1 123-456-7890</p>
              </div>

            </div>
            <div className='flex gap-2 my-6 md:my-1'>
              <IoMail className='bg-white text-orange-400 text-5xl border rounded-[50%] p-2' />
              <div className='block'>
                <span className='text-gray-400'>Send Us A Message</span><br />
                <p className='text-white'>solution@valom.com</p>
              </div>

            </div>
            <div className='flex gap-2 my-6 md:my-1'>
              <FaMapMarkerAlt className='bg-white text-orange-400  text-5xl border rounded-[50%] p-2' />
              <div className='block'>
                <span className='text-gray-400'>Address Here</span><br />
                <p className='text-white'>452 Marie Avenue, 166HK</p>
              </div>

            </div>
          </div>
        </div>
        <div className='w-70 md:w-100 pt-5 md:pt-18 '>
          <h3 className='text-2xl font-bold py-5 text-white'>Instragram</h3>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-3 '>
            <img src={building} alt="building" className='w-[100%] h-25 object-cover ' />
            <img src={building1} alt="building1" className='w-[100%] h-25 object-cover ' />
            <img src={building2} alt="building2" className='w-[100%] h-25 object-cover ' />
            <img src={building3} alt="building3" className='w-[100%] h-25 object-cover ' />
            <img src={building4} alt="building4" className='w-[100%] h-25 object-cover ' />
            <img src={building5} alt="building5" className='w-[100%] h-25 object-cover ' />
            <img src={building6} alt="building6" className='w-[100%] h-25 object-cover ' />
            <img src={building2} alt="building2" className='w-[100%] h-25 object-cover ' />
            <img src={building3} alt="building3" className='w-[100%] h-25 object-cover ' />
          </div>
        </div>
      </div>
    </>
  )
}
