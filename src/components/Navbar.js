import React, { useState } from 'react';
import { NavItems } from './NavItems.js';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='py-4 md:px-4 md:py-6 flex flex-col md:flex-row md:items-center justify-between text-white bg-purple-600'>
      <div class='px-4 md:px-0 flex items-center justify-between'>
        <h1 class='text-lg font-semibold'>React Navbar</h1>
        <div
          className='md:hidden cursor-pointer'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </div>
      </div>

      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:block mt-4 md:mt-0 border-t border-purple-700 md:border-none`}
      >
        <ul className='md:space-x-4 md:flex md:items-center'>
          {NavItems.map((navItem) => (
            <li
              key={navItem.id}
              className='px-4 md:px-0 hover:bg-purple-700 md:hover:bg-purple-600'
            >
              <a
                className='py-2 block md:py-0 md:inline hover:text-yellow-500'
                href={navItem.url}
              >
                {navItem.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
