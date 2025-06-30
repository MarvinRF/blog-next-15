import React from 'react';

const NotFoundPage = () => {
  return (
    <main
      className='min-h-[320px] flex items-center justify-center px-4 text-center'
      aria-label='Página não encontrada'
    >
      <div className='max-w-md'>
        <h1 className='text-7xl font-extrabold text-red-600 mb-4'>404</h1>
        <h2 className='text-2xl font-semibold mb-2'>Página não encontrada</h2>
        <p className='text-base text-muted-foreground'>
          A página que você procura pode ter sido removida ou não existe.
        </p>
      </div>
    </main>
  );
};

export default NotFoundPage;
