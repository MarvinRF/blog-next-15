import React from 'react';

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

const PostSlugPage = async ({ params }: PostSlugPageProps) => {
  const { slug } = await params;
  return <div>rota dinamica: {slug}</div>;
};

export default PostSlugPage;
