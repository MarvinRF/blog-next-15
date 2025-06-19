import React from 'react';
import clsx from 'clsx';

type spinLoaderProps = {
  className?: string;
};

export const SpinLoader = ({ className = '' }: spinLoaderProps) => {
  return (
    <div className={clsx('flex', 'items-center', 'justify-center', className)}>
      <div
        className={clsx(
          'w-10',
          'h-10',
          'border-5',
          'border-t-transparent',
          'border-slate-900',
          'rounded-full',
          'animate-spin',
        )}
      ></div>
    </div>
  );
};
