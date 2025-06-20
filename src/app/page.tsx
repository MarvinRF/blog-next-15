import { PostList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { ThemeToggle } from '@/components/ThemeSwitch';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <div className='bg-slate-100 text-slate-900 min-h-screen px-5'>
      <header>
        <h1 className='text-6xl font-bold text-center py-8'>Header</h1>
        <div className='bg-white text-black dark:bg-gray-900 dark:text-white p-4 rounded-lg shadow-md'>
          Este é um elemento que muda de cor com o tema.
        </div>
        <ThemeToggle />
      </header>
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
      <footer>
        <p className='text-5xl font-bold text-center py-8'>Footer</p>
      </footer>
    </div>
  );
}
