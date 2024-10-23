"use client";
import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-600">Oops!</h1>
        <p className="text-lg text-gray-700 mt-4">Something went wrong.</p>
        <p className="text-sm text-gray-500">Please try refreshing the page or check back later.</p>
      </div>
    </div>
  );
};

export default ErrorPage;