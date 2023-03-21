import React from 'react';

//  internal imports
import Button from '../../Shared/Button';
import doc from '../../../assets/images/doctor.png';
import { Link } from 'react-router-dom';

const AppointmentDesc = () => {
  return (
    <div className="flex bg-appointment-image bg-cover bg-center bg-no-repeat justify-center items-center my-24">
      <div className="flex-1 hidden lg:block">
        <img src={doc} alt="" className="mt-[-200px]" />
      </div>
      <div className="flex-1 text-white container mx-auto p-6">
        <h1 className="text-primary text-2xl font-bold mb-2">Appointment</h1>
        <h1 className="text-4xl font-bold mb-2">Make an appointment Today</h1>
        <p className="my-2">
        Our teeth have such an important role to play in our lives.
         They help us chew and digest food, they help us to talk and
          speak clearly and they also give our face its shape. A 
          smile also has other day-to-day benefits. It can give us 
          greater confidence, as well as influence our social lives, 
          careers and relationships.
        </p>
        <Link to="/appointment">
          <Button>Make Appointment</Button>
        </Link>
      </div>
    </div>
  );
};

export default AppointmentDesc;
