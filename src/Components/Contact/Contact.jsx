import React from 'react'
import './Contact.css'


const Contact = () => {
  return(
  <div class="main-section">
  <div class="main-section-header">
      <div class="main-container">
          <h2>Contact Us</h2>
      </div>
  </div>
  
  <div class="main-container">
      <div class="main-row">
          <div class="contact-info-section">
            
              <div class="contact-info-item">
                  <div class="contact-info-content">
                      <h4>Address</h4>
                      <p>Medical College Sahiwal,<br /> Pakistan </p>
                  </div>
              </div>

              <div class="contact-info-item">
                  <div class="contact-info-content">
                      <h4>Phone</h4>
                      <p>9999XXXXXX</p>
                  </div>
              </div>
              <div class="contact-info-item">

                  <div class="contact-info-content">
                      <h4> Email</h4>
                      <p>maheenjavaid511@gmail.com</p>
                  </div>
              </div>
          </div>
          <div class="contact-form-section">
              <form action="" id="contact-form">
                  <h2>Send Message</h2>
                  <div class="input-container">
                      <input type="text" required="true" name=""></input>
                      <span>Full Name</span>
                  </div>
                  <div class="input-container">
                      <input type=" email" required="true" name=""></input>
                      <span> Email</span>
                  </div>
                  <div class="input-container">
                      <textarea required="true" name=""></textarea>
                      <span>Type your Message...</span>
                  </div>
                  <div class="input-container">
                      <input type="submit" value="Send" name=""></input>
                  </div>
              </form>
          </div>
      </div>
  </div>
</div>

);
};

export default Contact;