import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import './Appoint.css';
import 'tailwindcss/tailwind.css';
import Register from '../Register/Register';

const API_BASE_URL = 'http://localhost:5000';

const timeSlots = [
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
];

const RotatingAppointmentCube = () => (
  <div className='cubeCard appointmentCubePanel'>
    <div className='appointCubeSkills'>
      <div className='skillCube cubeFace1'>
        <img src="https://i.pinimg.com/564x/25/94/b9/2594b93a05876942bc889c46443bd9a8.jpg" alt="Clinic visual 1"></img>
      </div>
      <div className='skillCube cubeFace2'>
        <img src="https://i.pinimg.com/564x/25/94/b9/2594b93a05876942bc889c46443bd9a8.jpg" alt="Clinic visual 2"></img>
      </div>
      <div className='skillCube cubeFace3'>
        <img src="https://i.pinimg.com/564x/25/94/b9/2594b93a05876942bc889c46443bd9a8.jpg" alt="Clinic visual 3"></img>
      </div>
      <div className='skillCube cubeFace4'>
        <img src="https://i.pinimg.com/564x/25/94/b9/2594b93a05876942bc889c46443bd9a8.jpg" alt="Clinic visual 4"></img>
      </div>
      <div className='skillCube cubeFace5'>
        <img src="https://i.pinimg.com/564x/25/94/b9/2594b93a05876942bc889c46443bd9a8.jpg" alt="Clinic visual 5"></img>
      </div>
      <div className='skillCube cubeFace6'>
        <img src="https://i.pinimg.com/564x/25/94/b9/2594b93a05876942bc889c46443bd9a8.jpg" alt="Clinic visual 6"></img>
      </div>
    </div>
  </div>
);

export const Appoint = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookedSlots, setBookedSlots] = useState([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [availabilityError, setAvailabilityError] = useState('');

  const minDate = useMemo(() => new Date().toISOString().split('T')[0], []);

  const formattedDate = useMemo(() => {
    if (!selectedDate) return '';

    return new Date(`${selectedDate}T00:00:00`).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }, [selectedDate]);

  const availableCount = timeSlots.length - bookedSlots.length;

  useEffect(() => {
    const fetchAvailability = async () => {
      if (!selectedDate) {
        setBookedSlots([]);
        setAvailabilityError('');
        return;
      }

      setIsLoadingSlots(true);
      setAvailabilityError('');

      try {
        const response = await axios.get(`${API_BASE_URL}/appointments/availability`, {
          params: { date: selectedDate },
        });

        const reservedSlots = response.data?.bookedSlots || [];
        setBookedSlots(reservedSlots);

        if (reservedSlots.includes(selectedTime)) {
          setSelectedTime('');
        }
      } catch (error) {
        setBookedSlots([]);
        setAvailabilityError(error.response?.data?.error || 'Unable to load slot availability right now.');
      } finally {
        setIsLoadingSlots(false);
      }
    };

    fetchAvailability();
  }, [selectedDate, selectedTime]);

  const handleReservationSuccess = ({ date, preferredTime }) => {
    if (date === selectedDate && preferredTime) {
      setBookedSlots((current) => {
        if (current.includes(preferredTime)) {
          return current;
        }

        return [...current, preferredTime];
      });

      setSelectedTime('');
    }
  };

  const handleReservationConflict = ({ preferredTime }) => {
    if (!preferredTime) {
      return;
    }

    setBookedSlots((current) => {
      if (current.includes(preferredTime)) {
        return current;
      }

      return [...current, preferredTime];
    });

    if (selectedTime === preferredTime) {
      setSelectedTime('');
    }
  };

  return (
    <div className='appoint'>
      <div className='heading'>
        <span className='headingTag'>Care Starts Here</span>
        <h2>Book an Appointment</h2>
        <p>Choose a convenient date, share your details, and let our team guide you with quick and reliable care.</p>
      </div>

      <div className='appointmentLayout'>
        <div className='bookingPanel'>
          <div className='calendarCard'>
            <div className='panelHeader'>
              <span>Select date and time</span>
              <h3>Choose your preferred appointment slot</h3>
              <p>
                {selectedDate && selectedTime
                  ? `Selected slot: ${formattedDate} at ${selectedTime}`
                  : 'Pick a date and select one of the currently available time slots below.'}
              </p>
            </div>

            <div className='slotSelectionLayout'>
              <div className='bookingPicker'>
                <div className='pickerBlock'>
                  <label htmlFor='appointment-date'>Preferred date</label>
                  <input
                    id='appointment-date'
                    type='date'
                    min={minDate}
                    value={selectedDate}
                    onChange={(event) => {
                      setSelectedDate(event.target.value);
                      setSelectedTime('');
                    }}
                  />
                </div>

                <div className='availabilitySummary'>
                  <div className='availabilitySummaryCard'>
                    <strong>{selectedDate ? formattedDate : 'Select a date'}</strong>
                    <span>
                      {selectedDate
                        ? `${availableCount} of ${timeSlots.length} slots available`
                        : 'Availability updates after you choose a date.'}
                    </span>
                  </div>

                  <div className='availabilityLegend'>
                    <span className='legendPill available'>Available</span>
                    <span className='legendPill selected'>Selected</span>
                    <span className='legendPill booked'>Booked</span>
                  </div>
                </div>

                {availabilityError && <p className='availabilityMessage error'>{availabilityError}</p>}
                {isLoadingSlots && <p className='availabilityMessage'>Loading reserved slots...</p>}
                {!isLoadingSlots && selectedDate && availableCount === 0 && (
                  <p className='availabilityMessage full'>All slots are booked for this date. Please choose another day.</p>
                )}

                <div className='pickerBlock'>
                  <label>Preferred time</label>
                  <div className='timeSlotGrid'>
                    {timeSlots.map((slot) => {
                      const isBooked = bookedSlots.includes(slot);
                      const isActive = selectedTime === slot;

                      return (
                        <button
                          key={slot}
                          type='button'
                          disabled={!selectedDate || isLoadingSlots || isBooked}
                          className={`timeSlotButton ${isActive ? 'active' : ''} ${isBooked ? 'booked' : ''}`}
                          onClick={() => setSelectedTime(slot)}
                        >
                          <span>{slot}</span>
                          <small>{isBooked ? 'Reserved' : isActive ? 'Selected' : 'Open'}</small>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <RotatingAppointmentCube />
            </div>
          </div>

          <div className='registerCard'>
            <div className='panelHeader'>
              <span>Your details</span>
              <h3>Send your appointment request</h3>
              <p>Fill in your contact information and reserve the slot you selected above.</p>
            </div>
            <div className='register'>
              <Register
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                onReservationSuccess={handleReservationSuccess}
                onReservationConflict={handleReservationConflict}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appoint;
