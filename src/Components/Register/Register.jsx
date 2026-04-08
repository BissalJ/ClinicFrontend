import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const API_BASE_URL = 'http://localhost:5000';

const Register = ({
  selectedDate,
  selectedTime,
  onReservationSuccess,
  onReservationConflict,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    additionalInfo: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedDate) {
      setStatus({ type: 'error', message: 'Please select an appointment date.' });
      return;
    }

    if (!selectedTime) {
      setStatus({ type: 'error', message: 'Please select a preferred time slot.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post(`${API_BASE_URL}/send-appointment`, {
        ...formData,
        date: selectedDate,
        preferredTime: selectedTime,
      });

      setStatus({
        type: 'success',
        message: response.data?.message || 'Appointment reserved successfully.',
      });
      setShowPopup(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        additionalInfo: '',
      });
      onReservationSuccess?.({
        date: selectedDate,
        preferredTime: selectedTime,
      });
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Failed to send appointment request.';

      setStatus({
        type: 'error',
        message: errorMessage,
      });

      if (error.response?.status === 409) {
        onReservationConflict?.({
          date: selectedDate,
          preferredTime: selectedTime,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="main-section-r">
        <div className="main-container-r">
          <div className="main-row">
            <div className="contact-form-section-r">
              <form id="register-form" onSubmit={handleSubmit}>
                <div className="input-container">
                  <input
                    type="text"
                    required={true}
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder=" "
                  />
                  <span>Full Name</span>
                </div>

                <div className="input-container">
                  <input
                    type="email"
                    required={true}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                  />
                  <span>Email</span>
                </div>

                <div className="input-container">
                  <input
                    type="tel"
                    required={true}
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder=" "
                  />
                  <span>Phone</span>
                </div>

                <div className="input-container">
                  <textarea
                    required={true}
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    placeholder=" "
                  ></textarea>
                  <span>Additional Information</span>
                </div>

                {status.message && (
                  <p className={`form-status ${status.type}`}>{status.message}</p>
                )}

                <div className="input-container">
                  <input
                    type="submit"
                    value={isSubmitting ? 'Reserving...' : 'Reserve Slot'}
                    name="submit"
                    disabled={isSubmitting}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Slot Reserved</h2>
            <p>Your appointment request has been saved successfully.</p>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
