import React from 'react';
// import contactimg from '../Images/services.jpg';
import contactimg from '../Images/Banner diginet.png';
import Contactform from './Contactform';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
  const textContainerStyle = {
    position: 'absolute',
    top: '50%',
    left: '5%',
    transform: 'translateY(-50%)',
    textAlign: 'left',
    width: '40%',
    padding: '20px',
    color: 'white'
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
    position: 'relative',
    
  };

  const smallScreenTextContainerStyle = {
    width: '80%',
    left: '10%'
  };

  const smallScreenImgStyle = {
    width: '100%',
    height: 'auto',
    position: 'relative',
  };

  return (
    <>
      
    
      <div className="position-relative ">
        <img src={contactimg} alt="" style={smallScreenImgStyle} />
        {/* <div className="textOverImage" style={{ ...textContainerStyle, ...smallScreenTextContainerStyle }}>
          <h6 className='welcome text-warning fw-bold'>WELCOME TO OUR COMPANY</h6>
          <h1 className='contactText display-4 fw-bold'>CONTACT US</h1>
        </div> */}
      </div>
<Contactform/>
      
    </>
  );
 }