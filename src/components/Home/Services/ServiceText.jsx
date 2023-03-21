import React from 'react';

//  internal imports

import treatment from '../../../assets/images/treatment.png';

const ServiceText = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          alt=""
          className="rounded-lg shadow-2xl lg:max-w-sm"
        />
        <div className="lg:px-12">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
          Providing high-quality dental treatment with a patient-centered approach that is personalized to meet the unique needs and preferences of each individual patient.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default ServiceText;
