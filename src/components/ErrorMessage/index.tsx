'use client'; // <- Se espalha para todos os componentes que eu importar aqui
import React from 'react';
type ErrorMessageProps = {
  pageTitle: string;
  contentTitle: string;
  code: string;
  content: React.ReactNode;
};

const ErrorMessage = ({
  content,
  contentTitle,
  pageTitle,
  code,
}: ErrorMessageProps) => {
  return (
    <>
      <title>{pageTitle}</title>
      <main
        className='min-h-[320px] flex items-center justify-center px-4 text-center'
        aria-label='Página não encontrada'
      >
        <div className='max-w-md'>
          <h1 className='text-7xl font-extrabold text-red-600 mb-4'>{code}</h1>
          <h2 className='text-2xl font-semibold mb-2'>{contentTitle}</h2>
          <div className='text-base text-muted-foreground'>{content}</div>
        </div>
      </main>
    </>
  );
};

export default ErrorMessage;
