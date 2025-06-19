'use client';
import clsx from 'clsx';
export const Header = () => {
  return (
    <>
      <h1 className={clsx({ 'text-4xl': true }, 'font-bold', 'mb-4')}>
        Welcome to Marvin Tech Blog
      </h1>
      <p className='text-lg mb-8'>
        Discover the latest in technology and innovation.
      </p>
    </>
  );
};
