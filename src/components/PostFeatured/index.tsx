import React from 'react';
import { PostCoverImage } from '../PostCoverImage';
import clsx from 'clsx';
import { PostHeading } from '../PostHeading';

export const PostFeatured = () => {
  const slug = 'qualquer';
  const postLink = `/post/${slug}`;
  return (
    <section
      className={clsx(
        'grid grid-cols-1 gap-8 mb-16',
        'sm:grid-cols-2',
        'group',
      )}
    >
      <PostCoverImage
        href={postLink}
        src='/images/bryen_1.png'
        alt={'main post'}
        title={'main post'}
        width={1200}
        height={720}
        mode='fixed'
        priority={true}
      />
      <div className='flex flex-col sm:justify-center'>
        <time className='text-zinc-600 text-sm/tight' dateTime='2025-04-20'>
          23/06/2025 10:00
        </time>
        <PostHeading as='h1' url={postLink}>
          Very big Title of a Post
        </PostHeading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          aspernatur quisquam eligendi necessitatibus est corrupti dolores quo
          assumenda, iste modi et sequi quas, facilis perspiciatis. Cumque natus
          at recusandae eligendi! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Iste alias animi optio placeat voluptatem provident
          earum ratione amet facere eaque, omnis ut atque, odio, nihil porro
          ipsum quis tempora! Voluptates.
        </p>
      </div>
    </section>
  );
};
