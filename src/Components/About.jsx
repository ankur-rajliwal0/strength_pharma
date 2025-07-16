import React from 'react';

function About() {
  return (
    <section className="py-20 bg-white min-h-screen lg:mt-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-5xl font-extrabold text-gray-800 mb-10 leading-tight">
          <h1>About Us</h1>
        </div>
        <div className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-5xl">
          <p className="mb-6">
            <strong>Strength Pharma</strong> is a trusted leader in the pharmaceutical industry, dedicated to improving health and quality of life through the development of safe, effective, and affordable medications.
          </p>
          <p className="mb-6">
            With a strong foundation in scientific research and a commitment to innovation, we deliver a broad portfolio of products across key therapeutic areas, including cardiology, oncology, neurology, and general wellness.
          </p>
          <p>
            Our mission is to make healthcare accessible to all while maintaining the highest standards of quality, integrity, and sustainability. Strength Pharma is more than a company — we are a promise of health and hope for communities around the world.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
