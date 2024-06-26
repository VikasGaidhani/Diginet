import React from 'react';
import './Contact.css';

export default function Contactform() {
  const handleFormSubmit = async (event) => {
    event.preventDefault(); 

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        form.reset(); 
      } else {
        console.error('Form submission failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="container-fluid mt-4 contact-info">
      <div className="row justify-content-center px-3">
        <div className="col-lg-6 col-md-10 col-sm-6">
          <div className="contact-info">
            <div className="section-title">
              <span className="title-tag">Contact info</span>
              <h2 className="title m-2">Catch us here</h2>
            </div>
            <div className="contact-info-list row mobile_no_style">
              <div className="col-lg-4 col-md-4 col-sm-4 address">
                <p>
                  <i className="fa-solid fa-location-dot icons"></i>
                  B 76, NICE Area, MIDC, Satpur <br /> Nashik, Maharashtra 422007
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 address">
                <p>
                  <i className="fa fa-envelope icons" aria-hidden="true"></i>
                  <a href="mailto:Sales@spandigitsocial.com" className="mail_address">
                    Sales@spandigitsocial.com
                  </a>
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 address text-center">
                <p>
                  <i className="fa-solid fa-phone icons"></i>India
                </p>
                <a href="tel:+91 8329905564" className="contact_text_style">
                  +91 8007030184
                </a>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleFormSubmit}>
            <div className="contact-form mt-4">
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <input type="text" className="form-control custom-input" placeholder="Enter Name" id="name" name="name" />
                </div>
                <div className="col-lg-6 mb-4">
                  <input type="email" className="form-control custom-input" placeholder="Email" id="email" name="email" />
                </div>
                <div className="col-lg-6 mb-4">
                  <input type="text" className="form-control custom-input" placeholder="Company name" id="companyname" name="companyname" />
                </div>
                <div className="col-lg-6 mb-4">
                  <input type="tel" className="form-control custom-input" placeholder="Phone" id="phone" name="phone" />
                </div>
                <div className="col-12 mb-4">
                  <textarea className="textarea form-control custom-input" id="help" name="help" placeholder="How Can We Help?"></textarea>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-5 col-md-10 contact-maps">
          <iframe
            className="map"
            src="https://maps.google.com/maps?q=Spandigit%20Social,%20B76,NICE%20Area,%20MIDC,%20Satpur%20Colony,%20Nashik,%20Maharashtra%20422007&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
