const JobsPage = () => {
    const jobs = [
      {
        id: 1,
        title: 'Frontend Developer',
        location: 'Remote',
        description:
          'We are looking for a talented frontend developer proficient in React.js and Tailwind CSS. Join our remote team to build modern web applications.',
      },
      {
        id: 2,
        title: 'Backend Developer',
        location: 'New York, USA',
        description:
          'Seeking an experienced backend developer skilled in Node.js and MongoDB. You will help design and maintain APIs for our growing platform.',
      },
      {
        id: 3,
        title: 'UI/UX Designer',
        location: 'San Francisco, USA',
        description:
          'Join our design team to create stunning user interfaces and seamless user experiences. Proficiency in Figma or Adobe XD is required.',
      },
    ];
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Current Job Openings</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white shadow-md p-6 rounded-lg max-w-sm">
              <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{job.location}</p>
              <p className="text-gray-700">{job.description}</p>
              <button className="mt-4 text-blue-500 hover:underline">Apply Now</button>
            </div>
          ))}
        </div>
        <a href="/" className="text-blue-500 hover:underline">
            Back to Home
          </a>
      </div>
    );
  };
  
  export default JobsPage;
  