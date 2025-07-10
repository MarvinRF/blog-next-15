import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2';
  className?: string;
};
export const PostHeading = ({
  children,
  url,
  className,
  as: Tag = 'h2',
}: PostHeadingProps) => {
  const headingClassesMap = {
    h1: 'text-2xl/tight font-extrabold mb-4 sm:text-4xl',
    h2: 'text-2xl/tight font-bold mb-4',
  };
  return (
    <Tag
      className={clsx(
        headingClassesMap[Tag],
        'sm:text-4xl/tight',
        `${className}`,
      )}
    >
      <Link
        className='group-hover:text-zinc-500 dark:group-hover:text-zinc-600 transition duration-500 ease-in-out'
        href={url}
      >
        {children}
      </Link>
    </Tag>
  );
};
