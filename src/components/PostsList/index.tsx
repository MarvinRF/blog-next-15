import { postRepository } from '@/repositories/post';
import { PostCoverImage } from '../PostCoverImage';
import clsx from 'clsx';
import { PostContent } from '../PostContent';

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
        <div key={post.id} className={clsx('flex flex-col group gap-4')}>
          <PostCoverImage
            href={`/post/${post.slug}`}
            src={post.coverImageUrl}
            alt={post.title}
            title={post.title}
            width={1200}
            height={720}
          />
          <PostContent
            dateTime={post.createdAt}
            formattedDate={post.createdAt}
            title={post.title}
            url={`/post/${post.slug}`}
          >
            {post.excerpt}
          </PostContent>
        </div>
      ))}
    </div>
  );
}
