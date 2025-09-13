import React from 'react'
import { contact } from '../../assets/images'
import { Formik } from 'formik';

export default function Formsection() {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 px-5 py-20 '>
                <div className=''>
                    <h5 className='text-md uppercase'>Get in touch</h5>
                    <h2 className='text-5xl font-bold'>Transforming Visions Into Reality</h2>

                    <div className='px-4 mt-4'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <input type='text' placeholder='Enter your First name' className='border rounded w-[100%] my-2 h-10'/>
                            <input type="text" placeholder='Enter your Last name' className='border rounded w-[100%] my-2 h-10'/>
                            <input type="email" placeholder='Enter Your Email' className='border rounded w-[100%] my-2 h-10'/>
                            <input type="phone" placeholder='Enter your Phone Number' className='border rounded w-[100%] my-2 h-10'/>
                        </div>
                        <textarea placeholder='Enter Message' className='border rounded w-[100%] my-4 h-40'></textarea>
                        <button className='w-[100%] text-white bg-orange-400 py-3 rounded'>Submit</button>
                    </div>




                </div>
                <div>
                    <img src={contact} alt="" />

                </div>
            </div>
        </>
    )
}
