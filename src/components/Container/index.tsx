import clsx from 'clsx';
import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <div
      className={clsx(
        'bg-slate-100',
        'text-slate-900',
        'dark:bg-gray-900 dark:text-white',
        'min-h-screen px-5',
        'mx-auto flex justify-center',
      )}
    >
      <div className='max-w-screen-lg px-8'>{children}</div>
    </div>
  );
};
