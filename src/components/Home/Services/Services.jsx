import React from 'react';

//  internal imports
import Service from './Service';
import ServiceText from './ServiceText';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';

const Services = () => {
  const services = [
    {
      _id: 101,
      title: 'Fluoride Treatment',
      desc: 'Fluoride treatment strengthens teeth and prevents cavities by applying fluoride to the teeth through toothpaste, mouthwash, varnish, fluoridated water, or supplements.',
      img: fluoride,
    },
    {
      _id: 102,
      title: 'Cavity Filling',
      desc: 'Cavity filling is a dental procedure where decayed or damaged tooth material is removed and replaced with a filling material to restore function and prevent further decay.',
      img: cavity,
    },
    {
      _id: 103,
      title: 'Teeth Whitening',
      desc: 'Teeth whitening is a cosmetic dental procedure that uses bleaching agents to lighten the color of teeth and improve their appearance.',
      img: whitening,
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center">
        <h1 className="text-primary uppercase font-bold text-2xl">
          Our services
        </h1>
        <h1 className="font-bold text-5xl">Services We Provide</h1>
      </div>
      <div className="grid grid-cols-1 mx-auto my-16 lg:grid-cols-3 gap-5 px-6 md:px-28">
        {services?.map((service) => (
          <Service key={service?._id} service={service} />
        ))}
      </div>
      <div className="container mx-auto">
        <ServiceText />
      </div>
    </div>
  );
};

export default Services;
