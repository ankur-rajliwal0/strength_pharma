import cowImg from "../Assets/images/cows-green-field-blue-sky.jpg"
function AboutUs() {
  return (
    <section className="bg-gradient-to-br from-[#E1FFF6] to-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Image or Illustration */}
          <div className="relative">
            <img
              src={cowImg}
              alt="Veterinary care"
              className="rounded-[40px_0px] shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute top-[-20px] left-[-20px] w-[80px] h-[80px] bg-[#00A67E] rounded-full z-[-1]"></div>
          </div>

          {/* Right: Text Content */}
          <div>
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
              Compassion Meets Innovation in Veterinary Care
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              <span className="font-semibold text-[#00A67E]">Strength Pharma Vets</span> is a trusted leader in veterinary pharmaceuticals, dedicated to enhancing animal health through scientific excellence and ethical practices. We specialize in delivering innovative and reliable solutions for both companion animals and livestock.
            </p>
            <ul className="mb-6 space-y-3">
              <li className="flex items-start">
                <span className="text-[#00A67E] text-xl mr-3">✔️</span>
                <span className="text-gray-700">Research-driven veterinary formulations</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00A67E] text-xl mr-3">✔️</span>
                <span className="text-gray-700">Trusted by vets across the country</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00A67E] text-xl mr-3">✔️</span>
                <span className="text-gray-700">Committed to safety, quality, and care</span>
              </li>
            </ul>
            <button className="bg-[#00A67E] text-white px-6 py-3 rounded-[30px_0px] hover:scale-105 hover:bg-[#008e6d] transition-all duration-300 font-medium text-lg shadow-md">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
