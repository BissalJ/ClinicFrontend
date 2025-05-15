import React from 'react';
import './Appoint.css';
import 'tailwindcss/tailwind.css';
import StaticDatePickerLandscape from '../StaticDatePickerLandscape/StaticDatePickerLandscape';
import Register from '../Register/Register';


export const Appoint = () => {

  return (
    <div className='appoint'>
      <div className='heading'>
        <h2>Book an Appointment</h2>
      </div>


      <div className='main'>

          <div className='calendar'>
            <StaticDatePickerLandscape></StaticDatePickerLandscape>
          </div>

          <div className='register'>
            <Register></Register>
          </div>
      </div>




    </div>
  );
};

export default Appoint;

