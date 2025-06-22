import { Container } from '@/components/Container';
import { Navbar } from '@/components/NavBar';
import { PostList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <header className='flex items-center justify-evenly'>
        <h1 className='text-5xl font-bold text-center py-8'>Tech Heaven</h1>
        <Navbar />
      </header>
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
      <footer>
        <p className='text-5xl font-bold text-center py-8'>Footer</p>
      </footer>
    </Container>
  );
}
