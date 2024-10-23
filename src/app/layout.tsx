import Navbar from "./components/Navbar";
import "./globals.css";
import React from 'react';

export const metadata = {
  title: 'My Next.js App',
  description: 'A sample Next.js homepage using Tailwind CSS',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <header className="p-4 bg-blue-600 text-white text-center">
          <h1>Assignment 1 Building a Next.js Project with Tailwind CSS</h1>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="p-4 text-center text-sm bg-gray-800 text-white">
          © 2024 My Next.js App
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;



