const FrontendDeveloperPage = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Frontend Developer</h1>
        <p className="text-lg text-gray-700 mb-4">Location: <strong>Remote</strong></p>
        <p className="text-gray-700 text-center max-w-2xl mb-8">
          We are looking for a talented frontend developer proficient in React.js and Tailwind CSS. 
          Join our remote team to build modern web applications.
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Apply Now
        </button>
      </div>
    );
  };
  
  export default FrontendDeveloperPage;
  