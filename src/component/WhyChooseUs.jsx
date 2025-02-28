import { FaLeaf, FaSun, FaWind } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12">
      {/* Left Side - Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://htmlbeans.com/html/botanical/images/img01.jpg"
          alt="Botanical Store"
          className="w-full max-w-lg mt-6"
        />
      </div>

      {/* Right Side - Content */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <h2 className="text-5xl font-semibold mb-4 relative">
          Why choose us ?
          <span className="block w-28 h-1 bg-green-500 mt-2"></span>
        </h2>
        <p className="text-gray-600 mb-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
           Aperiam aspernatur totam aut a illum neque impedit natus 
           nulla cumque rerum? Maiores sequi animi quia hic harum 
           accusantium veniam fugiat rem.
          <span className="text-green-600 cursor-pointer italic"> Learn More</span>
        </p>

        {/* Features */}
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <FaLeaf className="text-green-500 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold">Hand Planted</h3>
              <p className="text-gray-500">
                There are many variations of passages of lorem ipsum available...
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaSun className="text-green-500 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold">Natural Sunlight</h3>
              <p className="text-gray-500">
                It is a long-established fact that a reader will be distracted...
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaWind className="text-green-500 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold">Clean Air</h3>
              <p className="text-gray-500">
                There are many variations of passages of lorem ipsum available...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
