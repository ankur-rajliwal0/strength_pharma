import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#001F1D] text-white py-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">

          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#00A67E]">Strength Pharma Vets</h3>
            <p className="text-gray-300 mb-4">
              Delivering trusted veterinary pharmaceuticals with science, care, and commitment to animal wellness.
            </p>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Strength Pharma Vets. All rights reserved.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/about" className="hover:text-[#00A67E] transition-colors">About Us</a></li>
              <li><a href="/products" className="hover:text-[#00A67E] transition-colors">Products</a></li>
              <li><a href="/contact" className="hover:text-[#00A67E] transition-colors">Contact</a></li>
              <li><a href="/careers" className="hover:text-[#00A67E] transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>📍 15, Padav Marg , Hisar (125001)</li>
              <li>📞 +91 74969-96311</li>
              <li>✉️ strengthpharma175@gmail.com </li>
            </ul>
            <div className="mt-4 flex space-x-4">
              {/* Icons can be replaced with real SVGs or font awesome */}
              <a href="https://www.instagram.com/strengthlab_/" className="hover:text-[#00A67E]">🅾</a>
              <a href="#" className="hover:text-[#00A67E]">ⓕ</a>
              <a href="#" className="hover:text-[#00A67E]">𝕏</a>
              <a href="#" className="hover:text-[#00A67E]">🔗</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
