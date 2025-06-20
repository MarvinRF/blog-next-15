import { PostList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { ThemeToggle } from '@/components/ThemeSwitch';
import clsx from 'clsx';
import { Search } from 'lucide-react';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <div
      className={clsx(
        'bg-slate-100',
        'text-slate-900',
        'dark:bg-gray-900 dark:text-white',
        'min-h-screen px-5',
      )}
    >
      <header className='flex items-center justify-evenly'>
        <h1 className='text-5xl font-bold text-center py-8'>Tech Heaven</h1>
        <div>
          <nav>
            <ul className='flex gap-4'>
              <li className='relative'>
                <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none' />
                <input
                  type='text'
                  placeholder='Search'
                  className='pl-9 w-[110px] text-lg text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white'
                />
              </li>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>Category</a>
              </li>
              <li>
                <a href='#'>About Me</a>
              </li>
              <li className='flex items-center'>
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </div>
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
