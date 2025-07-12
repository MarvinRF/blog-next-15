'use client';
import ErrorMessage from '@/components/ErrorMessage';

const RootErrorPage = () => {
  return (
    <>
      <ErrorMessage
        content='Algum error inesperado ocorreu'
        contentTitle='Página não pode ser carregada'
        pageTitle='Página não pode ser carregada'
        code='500😅'
      />
    </>
  );
};

export default RootErrorPage;
