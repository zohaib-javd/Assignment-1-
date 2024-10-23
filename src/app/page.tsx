import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6 md:flex-row">
      <div className="flex flex-col items-center md:items-start md:flex-1 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4">Welcome to Home Page</h1>
        <p className="text-lg mb-6">
          This is a simple homepage created with Tailwind CSS.
        </p>
      </div>
      <div className="md:flex-1 flex flex-col justify-center items-center mt-8 md:mt-0">
        
        <Image
          src="/my-image.jpg"
          alt="Zohaib Javed"
          width={256}  
          height={256} 
          className="rounded-full object-cover mb-4"
        />
        <div className="text-gray-700 text-center">
          <h2 className="text-xl font-semibold">About Me</h2>
          <p className="text-sm">
            As a seasoned Cloud Applied Generative AI Engineer and banking professional, I bring 13+ years of service quality expertise and a passion for innovation. With a strong background in driving operational excellence and customer satisfaction, I leverage cutting-edge technologies like GenAI, cloud computing, and DevOps to develop intelligent solutions. Proficient in TypeScript, Python, Next.js, and Web3/Blockchain integration, I&#39;m dedicated to transforming financial services through AI-driven innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
