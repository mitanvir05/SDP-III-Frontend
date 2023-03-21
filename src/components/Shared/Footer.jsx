import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-footer-image bg-cover bg-center mt-auto">
      <footer className="footer p-10 text-base-content">
        <div>
          <span className="footer-title">Services</span>
          <a href="#branding" className="link link-hover">
            Branding
          </a>
          <a href="#design" className="link link-hover">
            Design
          </a>
          <a href="#marketing" className="link link-hover">
            Marketing
          </a>
          <a href="#ad" className="link link-hover">
            Advertisement
          </a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a href="#about" className="link link-hover">
            About us
          </a>
          <a href="#contact" className="link link-hover">
            Contact
          </a>
          <a href="#jobs" className="link link-hover">
            Jobs
          </a>
          <a href="#kit" className="link link-hover">
            Press kit
          </a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a href="#terms" className="link link-hover">
            Terms of use
          </a>
          <a href="#privacy" className="link link-hover">
            Privacy policy
          </a>
          <a href="#cookie" className="link link-hover">
            Cookie policy
          </a>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t text-base-content border-base-300">
        <div className="items-center grid-flow-col">
         
        </div>
        <div className="md:place-self-center md:justify-self-end">
          
        </div>
      </footer>
      <footer className="footer footer-center p-4 text-base-content">
        <div>
          <p>Copyright © {year} - All right reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
