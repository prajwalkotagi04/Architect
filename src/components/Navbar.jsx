import React, { useState } from 'react';
import { logo } from '../assets/images';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [navsidebar, setnavsidebar] = useState(false);
  const navigate = useNavigate();

  const pages = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'About',
      path: '/'
    },
    {
      name: 'Services',
      path: '/'
    },
    {
      name: 'Projects',
      path: '/'
    },
    {
      name: 'Pages',
      path: '/'
    },
    {
      name: 'Contact',
      path: '/'
    },
  ];

  return (
    <nav className="flex justify-between items-center p-4 px-8 bg-gray-100 md:px-20 relative">
      <div className="text-2xl font-bold w-15">
        <img src={logo} alt="Logo" className="w-32" />
      </div>

      {/* Desktop Menu */}
      <div className="space-x-12 hidden md:flex">
        <ul className="flex gap-8">
          {pages.map((page) => (
            <li
              key={page.name}
              onClick={() => navigate(page.path)}
              className="cursor-pointer hover:underline text-xl"
            >
              {page.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop */}
      <div className="flex items-center justify-center space-x-8">
        <button className="text-xl bg-black px-10 py-2 text-white rounded-4xl hidden md:block">
          Get Free Consultant
        </button>
        <FaBars
          className="text-2xl cursor-pointer hidden md:block"
          onClick={()=>setnavsidebar(true)}
        />
      </div>

      {navsidebar && (
        <div className='fixed inset-0 bg-gray bg-opacity-50 z-40' onClick={()=>setnavsidebar(false)}></div>
      )}

      <div className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${navsidebar ? 'translate-x-0' : '-translate-x-full'}`}>

      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <FaBars
          className="text-2xl cursor-pointer"
          onClick={() => setNav(true)}
        />
      </div>

      {/* Overlay */}
      {nav && (
        <div
          className="fixed inset-0 bg-black bg-opacity-500 z-40"
          onClick={() => setNav(false)}
        ></div>
      )}

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${nav ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <img src={logo} alt="Logo" className="w-28" />
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={() => setNav(false)}
          />
        </div>

        <ul className="flex flex-col p-4 space-y-4">
          {pages.map((page) => (
            <li
              key={page.name}
              onClick={() => {
                navigate(page.path);
                setNav(false);
              }}
              className="cursor-pointer text-lg"
            >
              {page.name}
            </li>
          ))}

          <li>
            <button className="text-xl bg-black px-6 py-2 text-white rounded-4xl w-full">
              Get Free Consultant
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
