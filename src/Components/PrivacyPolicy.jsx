import React from 'react';

function PrivacyPolicy() {
  return (
    <section className="bg-white py-16 min-h-screen lg:mt-12">
      <div className="container mx-auto px-6 lg:px-20 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Privacy Policy</h1>

        <p className="text-lg text-gray-700 mb-6">
          At <strong>Strength Pharma</strong>, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website or interact with our services.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Information We Collect</h2>
        <p className="text-gray-700 mb-4">
          We may collect personal information such as your name, email address, phone number, and any other details you provide through contact forms or account registrations.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>To respond to inquiries and provide customer support</li>
          <li>To improve our website, services, and user experience</li>
          <li>To send promotional or informational emails (you may opt out)</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Data Protection</h2>
        <p className="text-gray-700 mb-4">
          We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Cookies</h2>
        <p className="text-gray-700 mb-4">
          Our site may use cookies to enhance your experience. You can choose to disable cookies through your browser settings.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">5. Third-Party Disclosure</h2>
        <p className="text-gray-700 mb-4">
          We do not sell, trade, or transfer your personal information to outside parties, except as required by law or to trusted partners who assist us in operating our website and conducting our business.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">6. Changes to This Policy</h2>
        <p className="text-gray-700 mb-4">
          We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated revision date.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">7. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy, please contact us at: <br />
          <a href="mailto:privacy@strengthpharma.com" className="text-blue-600 underline">
            privacy@strengthpharma.com
          </a>
        </p>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
