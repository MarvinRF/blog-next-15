import React from 'react';
import { PostCoverImage } from '../PostCoverImage';
import clsx from 'clsx';
import { PostContent } from '../PostContent';
import {
  formatDateTime,
  formatRelativeDateTime,
} from '@/helpers/format-date-time';
import { findAllPublicPostsCached } from '@/lib/post/queries';

export const PostFeatured = async () => {
  const posts = await findAllPublicPostsCached();
  const post = posts[0];

  const postLink = `/post/${post.slug}`;
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
        src={post.coverImageUrl}
        alt={post.title}
        title={post.title}
        width={1200}
        height={720}
        mode='fixed'
        priority={true}
      />
      <PostContent
        dateTime={formatDateTime(post.createdAt)}
        formattedDate={formatDateTime(post.createdAt)}
        title={post.title}
        url={postLink}
        heading={'h1'}
        dateTitle={formatRelativeDateTime(post.createdAt)}
        excerpt={post.excerpt}
      />
    </section>
  );
};
