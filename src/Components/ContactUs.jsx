import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function ContactUs() {
  const form = useRef();
  const [status, setStatus] = useState({ message: '', type: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_j473l35', 'template_hylw2v3', form.current, {
        publicKey: 'aD6l8ZAN05e3MY6dc',
      })
      .then(
        () => {
          setStatus({ message: 'Message sent successfully ✅', type: 'success' });
          form.current.reset();
          setTimeout(() => setStatus({ message: '', type: '' }), 4000);
        },
        (error) => {
          console.error('FAILED...', error.text);
          setStatus({ message: 'Failed to send message ❌', type: 'error' });
          setTimeout(() => setStatus({ message: '', type: '' }), 4000);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-white to-blue-50 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 lg:mt-10">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Info Panel */}
        <div className="bg-blue-600 text-white p-12 flex flex-col justify-center space-y-8">
          <h2 className="text-4xl font-extrabold tracking-tight">Get In Touch</h2>
          <p className="text-blue-200 max-w-sm">
            Have questions about your pet's medication or need expert advice? We’re here to help you and your furry friends.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="w-6 h-6 text-blue-300" />
              <div>
                <p className="text-sm uppercase tracking-wider text-blue-300">Phone</p>
                <p className="font-semibold text-lg">+91 74969-96311</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaEnvelope className="w-6 h-6 text-blue-300" />
              <div>
                <p className="text-sm uppercase tracking-wider text-blue-300">Email</p>
                <p className="font-semibold text-lg">strengthpharma175@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="w-6 h-6 text-blue-300" />
              <div>
                <p className="text-sm uppercase tracking-wider text-blue-300">Location</p>
                <p className="font-semibold text-lg"> (125001) 15, Padav Marg , Hisar  Haryana ,India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Send us a message</h3>

          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                placeholder="Your Name"
                required
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label htmlFor="user_email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                placeholder="Your Email"
                required
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
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

      {/* Floating Pop-up Notification */}
      {status.message && (
        <div className="fixed  top-10 z-50">
          <div
            className={`max-w-sm w-full rounded-lg shadow-lg px-6 py-4 flex items-center space-x-4 text-white
              ${status.type === 'success' ? 'bg-green-500' : 'bg-red-500'}
            `}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {status.type === 'success' ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              )}
            </svg>
            <p className="text-sm font-medium">{status.message}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactUs;
