import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#244d3f] text-white py-12 pt-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        <h2 className="text-3xl font-bold mb-3">KeenKeeper</h2>
        
        <p className="text-sm text-gray-200 mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <h2 className="text-center mb-2">Social Links</h2>

        <div className="flex justify-center space-x-4 mb-8">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#244d3f] hover:bg-gray-200 transition">
            <FaInstagram size={18} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#244d3f] hover:bg-gray-200 transition">
            <FaFacebookF size={18} />
          </button>

          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#244d3f] hover:bg-gray-200 transition">
            <FaXTwitter size={18} />
          </button>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 border-t border-gray-50 pt-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;