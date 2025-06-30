import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <footer className='pb-16'>
      <p className='text-xl font-bold text-center'>
        Copyright &copy; {new Date().getFullYear()} -{' '}
        <Link href={'/'} className='hover:text-zinc-500'>
          Tech Heaven
        </Link>
      </p>
    </footer>
  );
};
