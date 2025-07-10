import { PostCoverImage } from '../PostCoverImage';
import clsx from 'clsx';
import { PostContent } from '../PostContent';
import { findAllPublicPostsCached } from '@/lib/post/queries';

export async function PostList() {
  const posts = await findAllPublicPostsCached();

  return (
    <div
      className={clsx(
        'grid grid-cols-1 gap-8',
        'sm:grid-cols-2',
        'lg:grid-cols-3',
        'mb-16',
      )}
    >
      {posts.slice(1).map(post => (
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
            dateTime={post.createdAt}
            title={post.title}
            heading={'h2'}
            url={`/post/${post.slug}`}
            excerpt={post.excerpt}
          />
        </div>
      ))}
    </div>
  );
}
