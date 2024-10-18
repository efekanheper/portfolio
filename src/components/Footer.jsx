import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="text-center text-sm text-neutral-50">
        <div className="flex justify-center">
          <div className="text-xs mb-4">
            <p>© 2024 Efekan Heper, All rights reserved.</p>
          </div>
        </div>
        <div className="flex justify-center space-x-6">
          <a
            href="linkedin.com/in/efekanheper/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <i class="ri-linkedin-box-fill ri-2x"></i>
          </a>
          <a
            href="https://x.com/efekannh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <i class="ri-twitter-x-line ri-2x"></i>
          </a>
          <a
            href="https://github.com/efekanheper"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <i className="ri-github-line ri-2x text-white"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
