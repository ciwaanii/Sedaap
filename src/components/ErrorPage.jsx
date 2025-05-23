import React from 'react';

const ErrorPage = ({ errorCode, errorDescription, errorImage }) => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${errorImage})` }}
    >
      <div className="bg-white bg-opacity-80 p-10 rounded-xl shadow-lg text-center max-w-xl">
        <h1 className="text-5xl font-bold mb-4 text-gray-800">Error {errorCode}</h1>
        <p className="text-lg text-gray-700">{errorDescription}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
