import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

export default function Address() {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-3 p-15 gap-6'>
                <div className='flex bg-gray-50 px-20 py-20 gap-5 items-center justify-center'>
                    <div>
                        <FaMapMarkerAlt className='text-5xl text-orange-400 bg-white hover:bg-amber-500 hover:text-white p-1 rounded-[50%]' />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold'>Our Current Location</h3>
                        <p>4517 Washington Ave. Manchester, Kentucky 39495. USA</p>
                    </div>
                </div>
                <div className='flex bg-gray-50 px-20 py-20 gap-5 items-center justify-center'>
                    <div>
                        <FaPhoneAlt  className='text-5xl text-orange-400 bg-white hover:bg-amber-500 hover:text-white p-1 rounded-[50%]' />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold '>Phone Number</h3>
                        <p>+00 (123) 666 000 666</p>
                        <p>+00 (123) 888 000 222</p>
                    </div>
                </div>
                <div className='flex bg-gray-50 px-20 py-20 gap-5 items-center justify-center'>
                    <div>
                        <IoMail className='text-5xl text-orange-400 hover:bg-amber-500 hover:text-white p-1 rounded-[50%] bg-white' />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold'>Email Address</h3>
                        <p>info@examplemail.com</p>
                        <p>help@faren.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}
