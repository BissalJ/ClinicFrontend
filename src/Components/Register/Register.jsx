import React from 'react';
import './Register.css'; // Ensure this path is correct

const Register = () => {
  return (
    <div className="main-section-r">
      

      <div className="main-container-r">
        <div className="main-row">
          <div className="contact-form-section-r">
            <form action="" id="register-form">

              <div className="input-container">
                <input type="text" required={true} name="firstName" />
                <span>First Name</span>
              </div>

              <div className="input-container">
                <input type="text" required={true} name="lastName" />
                <span>Last Name</span>
              </div>

              <div className="input-container">
                <input type="email" required={true} name="email" />
                <span>Email</span>
              </div>

              <div className="input-container">
                <input type="tel" required={true} name="phone" />
                <span>Phone</span>
              </div>

              <div className="input-container">
                <textarea required={true} name="additionalInfo"></textarea>
                <span>Additional Information</span>
              </div>

              <div className="input-container">
                <label>
                  <input type="checkbox" name="createAccount" defaultChecked />
                  Create an account?
                </label>
              </div>

              <div className="input-container">
                <input type="submit" value="Request" name="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;