const AboutPage = () => {
     return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-5xl font-bold text-blue-600 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 max-w-2xl text-center">
          Welcome to the About Page of our Next.js application. Here, we provide information 
          about our mission, our team, and what we aim to accomplish. Our app is built using 
          modern web technologies like Next.js and Tailwind CSS, offering a seamless and 
          responsive user experience.
        </p>
        <div className="mt-8">
          <a href="/" className="text-blue-500 hover:underline">
            Back to Home
          </a>
        </div>
      </div>
    );
  };
  
  export default AboutPage;