import React from 'react';
import clsx from 'clsx';
import { Loader } from 'lucide-react';

type spinLoaderProps = {
  className?: string;
};

export const SpinLoader = ({ className = '' }: spinLoaderProps) => {
  return (
    <div
      className={clsx(
        'flex',
        'items-center',
        'my-8',
        'justify-center',
        className,
      )}
    >
      <Loader className={clsx('w-10', 'h-10', 'animate-spin')} />
    </div>
  );
};
