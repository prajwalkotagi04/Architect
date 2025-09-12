import React from 'react'
import { RiLightbulbFlashLine } from 'react-icons/ri'
import { about } from '../../assets/images'
import { LuScanEye } from 'react-icons/lu'
import { TbUserStar } from 'react-icons/tb'

export default function About() {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7 m-5 bg-gray-50'>
                <div>
                    <img src={about} alt="about" className=' brightness-50 hover:brightness-100'/>
                </div>
                <div className='py-5 px-2'>
                    <h4 className='text-xl '>More About Our Company</h4>
                    <h2 className='text-3xl md:text-6xl font-bold py-2' >Building Innovating Solutions</h2>
                    <div>
                        <div className='flex py-3'>
                            <div>
                                <RiLightbulbFlashLine className='text-3xl bg-white p-1  shadow shadow-neutral-400 rounded-4xl w-15 h-15 px-2 text-black' />
                            </div>
                            <div className='space-x-2'>
                                <h3 className='text-xl font-bold px-3'>Integrated Design & Development</h3>
                                <p className='px-3'>Seamless collaboration between architecture and real estate teams for efficient project delivery.</p>
                            </div>
                        </div>
                        <div className='flex py-3'>
                            <div>
                                <LuScanEye className='text-3xl bg-white p-1  shadow shadow-neutral-400 rounded-4xl w-15 h-15 px-2 text-black' />
                            </div>
                            <div className='space-x-2'>
                                <h3 className='text-xl font-bold px-3'>Client-Centered Process</h3>
                                <p className='px-3'>Seamless collaboration between architecture and real estate teams for efficient project delivery.</p>
                            </div>
                        </div>
                        <div className='flex py-3'>
                            <div>
                                <TbUserStar  className='text-3xl bg-white p-1  shadow shadow-neutral-400 rounded-4xl w-15 h-15 px-2 text-black' />
                            </div>
                            <div className='space-x-2'>
                                <h3 className='text-xl font-bold px-3'>Advanced Visualization Tools</h3>
                                <p className='px-3'>Seamless collaboration between architecture and real estate teams for efficient project delivery.</p>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
