'use server';
import { PostList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <>
      <header>
        <h1 className='text-6xl font-bold text-center py-8'>Header</h1>
      </header>
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
      <footer>
        <p className='text-5xl font-bold text-center py-8'>Footer</p>
      </footer>
    </>
  );
}
