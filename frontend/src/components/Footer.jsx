import React from 'react'
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
     <div className="text-base-content">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-sm opacity-70">
              <span>© {new Date().getFullYear()} ThinkBoard. Made with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>by <a href="https://github.com/rjrahul007/" target='_blank'>RJ</a></span>
               
               <div className="ml-4">
                <button 
                onClick={scrollToTop}
                className="btn btn-circle btn-sm btn-primary "
                title="Back to top"
              >
                <ArrowUp size={16} />
              </button>
               </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Footer
