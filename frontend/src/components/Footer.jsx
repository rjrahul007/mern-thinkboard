import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 text-base-content bg-base-100 border-t border-base-300">
      <div className="flex justify-center items-center py-4">
        <div className="flex items-center space-x-1 text-sm opacity-70">
          <span>© {new Date().getFullYear()} ThinkBoard. Made with</span>
          <Heart size={16} className="text-red-500 fill-current" />
          <span>by <a href="https://github.com/rjrahul007/" target='_blank'>RJ</a></span>
          <div className="ml-4">
            <button
              onClick={scrollToTop}
              className="btn btn-circle btn-sm btn-primary"
              title="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;