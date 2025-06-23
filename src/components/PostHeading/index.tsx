import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2';
};
export const PostHeading = ({
  children,
  url,
  as: Tag = 'h2',
}: PostHeadingProps) => {
  const headingClassesMap = {
    h1: 'text-2xl/tight font-extrabold mb-4',
    h2: 'text-2xl/tight font-extrabold mb-4',
  };
  return (
    <Tag className={clsx(headingClassesMap[Tag], 'sm:text-4xl/tight')}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
};
