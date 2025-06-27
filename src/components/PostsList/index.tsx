import { postRepository } from '@/repositories/post';
import { PostCoverImage } from '../PostCoverImage';
import clsx from 'clsx';
import { PostContent } from '../PostContent';
import {
  formatDateTime,
  formatRelativeDateTime,
} from '@/helpers/format-date-time';

export async function PostList() {
  const posts = await postRepository.findAll();

  return (
    <div
      className={clsx(
        'grid grid-cols-1 gap-8',
        'sm:grid-cols-2',
        'lg:grid-cols-3',
      )}
    >
      {posts.map(post => (
        <div
          key={post.id}
          className={clsx(
            'flex flex-col gap-4 group',
            'border border-zinc-200 dark:border-zinc-700',
            'rounded-2xl p-4 bg-white dark:bg-zinc-900',
            'shadow-sm hover:shadow-md transition-shadow duration-300',
          )}
        >
          <PostCoverImage
            href={`/post/${post.slug}`}
            src={post.coverImageUrl}
            alt={post.title}
            title={post.title}
            mode='responsive'
          />
          <PostContent
            dateTime={formatDateTime(post.createdAt)}
            formattedDate={formatDateTime(post.createdAt)}
            title={post.title}
            url={`/post/${post.slug}`}
            dateTitle={formatRelativeDateTime(post.createdAt)}
          >
            {post.excerpt}
          </PostContent>
        </div>
      ))}
    </div>
  );
}
