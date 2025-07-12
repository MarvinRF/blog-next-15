import { PostFeatured } from '@/components/PostFeatured';
import { PostList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  throw new Error('erro na /');
  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
        <PostList />
      </Suspense>
    </>
  );
}
