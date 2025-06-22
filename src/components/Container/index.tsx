import clsx from 'clsx';
import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <div
      className={clsx(
        'bg-zinc-100',
        'text-zinc-900',
        'dark:bg-zinc-900 dark:text-white',
        'min-h-screen px-5',
        'flex items-center justify-center',
        'mx-auto',
      )}
    >
      <div className='max-w-[1440px] px-8 w-full'>{children}</div>
    </div>
  );
};
