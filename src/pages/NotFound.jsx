import React from 'react';
import { useParams } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage';

const NotFound = () => {
  const { errorCode } = useParams();
  const code = errorCode || '404';

  let errorDescription = '';
  let errorImage = '';

  switch (code) {
    case '400':
      errorDescription = 'Bad Request - Permintaan tidak dapat diproses.';
      errorImage = '/images/error400.png';
      break;
    case '401':
      errorDescription = 'Unauthorized - Akses ditolak.';
      errorImage = '/images/error401.png';
      break;
    case '403':
      errorDescription = 'Forbidden - Anda tidak memiliki izin untuk mengakses halaman ini.';
      errorImage = '/images/error403.png';
      break;
    case '404':
    default:
      errorDescription = 'Not Found - Halaman tidak ditemukan.';
      errorImage = '/images/error404.png';
  }

  return (
    <ErrorPage
      errorCode={code}
      errorDescription={errorDescription}
      errorImage={errorImage}
    />
  );
};

export default NotFound;
