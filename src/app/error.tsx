'use client';
import ErrorMessage from '@/components/ErrorMessage';
import { useEffect } from 'react';

type RootErrorProps = {
  error: Error;
  reset: () => void;
};

const RootErrorPage = ({ error }: RootErrorProps) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <>
      <ErrorMessage
        content='Ocorreu um erro do qual nossa aplicação não conseguiu tratar. Tente novamente mais tarde'
        contentTitle={'Internal Server Error'}
        pageTitle='Internal Server Error'
        code='501😅'
      />
    </>
  );
};

export default RootErrorPage;
