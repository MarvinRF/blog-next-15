import React from 'react';
import clsx from 'clsx';
import { PostHeading } from '../PostHeading';

type PostContentProps = {
  dateTime: string;
  formattedDate: string;
  title: string;
  dateTitle: string;
  url: string;
  excerpt: string;
  className?: string;
  heading: 'h1' | 'h2';
};

export const PostContent = ({
  dateTime,
  formattedDate,
  title,
  dateTitle,
  url,
  excerpt,
  heading,
  className,
}: PostContentProps) => {
  return (
    <div className={clsx('flex flex-col sm:justify-center', className)}>
      <time
        className='text-zinc-600 text-sm/tight cursor-default'
        dateTime={dateTime}
        title={dateTitle}
      >
        {formattedDate}
      </time>
      <PostHeading as={heading} url={url}>
        {title}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  );
};
