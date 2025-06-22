import React from 'react';
import { ThemeToggle } from '../ThemeSwitch';
import { Search } from 'lucide-react';

export const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className='flex gap-4'>
          <li className='relative'>
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none' />
            <input
              type='text'
              placeholder='Search'
              className='pl-9 w-[110px] text-lg text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white'
            />
          </li>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Category</a>
          </li>
          <li>
            <a href='#'>About Me</a>
          </li>
          <li className='flex items-center'>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </div>
  );
};
