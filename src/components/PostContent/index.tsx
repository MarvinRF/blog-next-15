import React from 'react';
import clsx from 'clsx';
import { PostHeading } from '../PostHeading';
import { PostDate } from '../PostDate';

type PostContentProps = {
  dateTime: string;
  title: string;
  url: string;
  excerpt: string;
  className?: string;
  heading: 'h1' | 'h2';
};

export const PostContent = ({
  dateTime,
  title,
  url,
  excerpt,
  heading,
  className,
}: PostContentProps) => {
  console.log(dateTime);
  return (
    <div className={clsx('flex flex-col sm:justify-center', className)}>
      <div>
        <span className='text-zinc-500 text-sm/tight'>Publicado em: </span>
        <PostDate dateTime={dateTime} />
      </div>
      <PostHeading as={heading} url={url}>
        {title}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  );
};
