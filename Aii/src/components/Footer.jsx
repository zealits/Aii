import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Aii Venture</h3>
          <p className="mb-4">Empowering businesses with AI and Cloud</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition">Terms of Service</a>
          </div>
          <p className="mt-8">&copy; 2024 Aii Venture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
