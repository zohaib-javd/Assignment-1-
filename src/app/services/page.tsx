const ServicesPage = () => {
  return (
    <div>
     
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Services</h1>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-6">
          {/* Service 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Web Development</h2>
            <p className="text-gray-600">
              We offer modern and responsive web development services using cutting-edge technologies such as React.js, Next.js, and Tailwind CSS.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Mobile App Development</h2>
            <p className="text-gray-600">
              Build seamless and powerful mobile applications for iOS and Android platforms using React Native and Flutter.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">UI/UX Design</h2>
            <p className="text-gray-600">
              Our design team creates beautiful user interfaces and experiences using tools like Figma and Adobe XD.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
