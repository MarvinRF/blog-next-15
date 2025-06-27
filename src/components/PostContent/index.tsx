import React from 'react';
import clsx from 'clsx';
import { PostHeading } from '../PostHeading';

type PostContentProps = {
  dateTime: string;
  formattedDate: string;
  title: string;
  dateTitle: string;
  url: string;
  children: React.ReactNode;
  className?: string;
};

export const PostContent = ({
  dateTime,
  formattedDate,
  title,
  dateTitle,
  url,
  children,
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
      <PostHeading as='h2' url={url}>
        {title}
      </PostHeading>
      <p>{children}</p>
    </div>
  );
};
