import { findPostBySlugCached } from '@/lib/post/queries';
import Image from 'next/image';
import { PostHeading } from '../PostHeading';

type SinglePostProps = {
  slug: string;
};

const SinglePost = async ({ slug }: SinglePostProps) => {
  const post = await findPostBySlugCached(slug);
  return (
    <article className='max-w-4xl mx-auto px-4 py-12'>
      {post.coverImageUrl && (
        <div className='relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-lg'>
          <Image
            src={post.coverImageUrl}
            alt={post.title}
            fill
            className='object-cover object-center'
            priority
          />
        </div>
      )}

      <header className='mb-6'>
        <PostHeading as='h1' url={`post/${post.slug}`}>
          {post.title}
        </PostHeading>
        <p className='text-sm text-gray-600'>
          Publicado por{' '}
          <span className='font-medium text-black dark:text-white'>
            {post.author}
          </span>{' '}
          em{' '}
          <time dateTime={post.createdAt}>
            {new Date(post.createdAt).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}
          </time>
        </p>
      </header>

      <section className='prose prose-neutral max-w-none'>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </section>

      <footer className='mt-12 text-sm text-gray-500 border-t pt-6'>
        Última atualização em{' '}
        <time dateTime={post.updatedAt}>
          {new Date(post.updatedAt).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          })}
        </time>
      </footer>
    </article>
  );
};

export default SinglePost;
