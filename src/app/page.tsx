import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostCoverImage } from '@/components/PostCoverImage';
import { PostHeading } from '@/components/PostHeading';
import { PostList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section
        className={clsx(
          'grid grid-cols-1 gap-8 mb-16',
          'sm:grid-cols-2',
          'group',
        )}
      >
        <PostCoverImage href='#' src='/images/bryen_1.png' />
        <div className='flex flex-col sm:justify-center'>
          <time className='text-zinc-600 text-sm/tight' dateTime='2025-04-20'>
            23/06/2025 10:00
          </time>
          <PostHeading as='h1' url={'/'}>
            Very big Title of a Post
          </PostHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            aspernatur quisquam eligendi necessitatibus est corrupti dolores quo
            assumenda, iste modi et sequi quas, facilis perspiciatis. Cumque
            natus at recusandae eligendi! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Iste alias animi optio placeat
            voluptatem provident earum ratione amet facere eaque, omnis ut
            atque, odio, nihil porro ipsum quis tempora! Voluptates.
          </p>
        </div>
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
      <footer>
        <p className='text-5xl font-bold text-center py-8'>Footer</p>
      </footer>
    </Container>
  );
}
