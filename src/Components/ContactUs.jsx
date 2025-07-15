import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-white to-blue-50 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Info Panel */}
        <div className="bg-blue-600 text-white p-12 flex flex-col justify-center space-y-8">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Get In Touch
          </h2>
          <p className="text-blue-200 max-w-sm">
            Have questions about your pet's medication or need expert advice? We’re here to help you and your furry friends.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="w-6 h-6 text-blue-300" />
              <div>
                <p className="text-sm uppercase tracking-wider text-blue-300">Phone</p>
                <p className="font-semibold text-lg">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaEnvelope className="w-6 h-6 text-blue-300" />
              <div>
                <p className="text-sm uppercase tracking-wider text-blue-300">Email</p>
                <p className="font-semibold text-lg">support@pawmedpharmacy.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="w-6 h-6 text-blue-300" />
              <div>
                <p className="text-sm uppercase tracking-wider text-blue-300">Location</p>
                <p className="font-semibold text-lg">1234 Pet Street, Animal City, USA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Send us a message
          </h3>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
