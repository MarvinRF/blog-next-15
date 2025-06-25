import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostFeatured } from '@/components/PostFeatured';
import { PostList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />
      <PostFeatured />
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
      <footer>
        <p className='text-5xl font-bold text-center py-8'>Footer</p>
      </footer>
    </Container>
  );
}
