import ErrorMessage from '@/components/ErrorMessage';
import React from 'react';

const NotFoundPage = () => {
  return (
    <>
      <ErrorMessage
        content='A página que você procura pode ter sido removida ou não existe.'
        contentTitle='Página não encontrada'
        pageTitle='Página não encontrada'
        code='404😅'
      />
    </>
  );
};

export default NotFoundPage;
