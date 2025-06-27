import React from 'react';
import { PostCoverImage } from '../PostCoverImage';
import clsx from 'clsx';
import { PostContent } from '../PostContent';

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
      <PostContent
        dateTime={'23/06/2025 10:00'}
        formattedDate={'23/06/2025 10:00'}
        title={'Very big Title of a Post'}
        url={`/post/`}
        heading={'h1'}
        dateTitle={'23/06/2025 10:00'}
        excerpt='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          aspernatur quisquam eligendi necessitatibus est corrupti dolores quo
          assumenda, iste modi et sequi quas, facilis perspiciatis. Cumque natus
          at recusandae eligendi! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Iste alias animi optio placeat voluptatem provident
          earum ratione amet facere eaque, omnis ut atque, odio, nihil porro
          ipsum quis tempora! Voluptates.'
      />
    </section>
  );
};
