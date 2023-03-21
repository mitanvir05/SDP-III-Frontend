import React from 'react';

//  internal imports
import chair from '../../../assets/images/chair.png';

const Banner = () => {
  return (
    <div className="hero min-h-screen lg:px-12">
      <div className="bg-banner-image bg-contain bg-no-repeat w-full h-full">
        <div className="bg-base-100 bg-opacity-95 h-full hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt=""
            className="rounded-lg shadow-2xl lg:max-w-sm"
          />
          <div className="lg:px-12">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
            The best and cheapest dentistry is when the right thing is done extremely well the first time and it lasts for a long time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
