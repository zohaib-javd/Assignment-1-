"use client";
import Link from 'next/link';

const UIUXDesignerPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">UI/UX Designer</h1>
      <p className="text-lg text-gray-700 mb-2">Location: <strong>Remote</strong></p>
      <p className="text-gray-700 text-center max-w-2xl mb-8">
        Join our design team to create stunning user interfaces and seamless user experiences. Proficiency 
        in <strong>Figma</strong> or <strong>Adobe XD</strong> is required. Help us shape the visual identity 
        and usability of our platform!
      </p>
      <Link href="/error">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Apply Now
        </button>
      </Link>
    </div>
  );
};

export default UIUXDesignerPage;