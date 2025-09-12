import React from 'react';
import { breadcumb, scale } from '../assets/images';

export default function Breadcrumb({ page, label }) {
    return (
        <>

            <div
                className="h-70 md:h-125 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${breadcumb})` }}
            >
                <div className="block items-center justify-center h-100 md:h-full">
                    <h1 className='text-center text-3xl pt-20 md:pt-40 md:text-6xl font-bold'>{label}</h1>
                    <div className='flex justify-center h-full my-2 md:my-4'>
                        <h1 className="text-center text-black text-3xl">Home  /  {page}</h1>
                    </div>
                </div>
            </div>
            <div >
                <marquee behavior="smooth" direction="left">
                    <img src={scale} alt="Scrolling Image"/>
                </marquee>
            </div>

        </>

    );
}
