const BackendDeveloperPage = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Backend Developer</h1>
        <p className="text-lg text-gray-700 mb-2">Location: <strong>New York, USA</strong></p>
        <p className="text-lg text-gray-700 mb-8">Job Type: <strong>Remote</strong></p>
        <p className="text-gray-700 text-center max-w-2xl mb-8">
          Seeking an experienced backend developer skilled in Node.js and MongoDB. You will help design and 
          maintain APIs for our growing platform. Join our team to make a difference in a fast-paced environment!
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Apply Now
        </button>
      </div>
    );
  };
  
  export default BackendDeveloperPage;
  