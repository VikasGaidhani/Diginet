// import React from 'react';
// import calltoaction from '../Images/cta-bg 2.png';
// import './Navbar.css';
// import call1 from '../Images/call1.webp';
// import call2 from '../Images/call2.webp';
// import call3 from '../Images/call3.webp';
// // import './CalltoAction.css'; // Import the new CSS file

// export default function CalltoAction() {
//   const textContainerStyle = {
//     position: 'absolute',
//     top: '50%',
//     left: '5%',
//     transform: 'translateY(-50%)',
//     textAlign: 'left',
//     width: '40%',
//     padding: '20px',
//     color: 'white',
//   };

//   const imgStyle = {
//     width: '100%',
//     height: 'auto',
//     position: 'relative',
//   };

//   const smallScreenTextContainerStyle = {
//     width: '80%',
//     left: '10%',
//   };

//   const smallScreenImgStyle = {
//     width: '100%',
//     height: 'auto',
//     position: 'relative',
//   };

//   return (
//     <>
//       <div className="container-fluid bg-dark ">
//         <div className="position-relative ">
//           <img src={calltoaction} alt="" style={smallScreenImgStyle} />
//           <div className="textOverImage" style={{ ...textContainerStyle, ...smallScreenTextContainerStyle }}>
//             <h6 className="welcome text-warning fw-bold " style={{marginTop:"9rem"}}>CALL TO ACTION</h6>
//             <h1 className="contactText fs-4 fw-bold">
//               GET AN EXTENSIVE AND RESULT-DRIVEN DIGITAL MARKETING PLAN TO GROW YOUR BUSINESS.
//             </h1>
//             <div className="">
//               <button type="button" className="btn bg-warning   py-2 callbtn mx-5">
//                 <i className="fa-regular fa-envelope"></i> MAIL US NOW
//               </button>
//               <button
//                 type="button"
//                 className="btn callbtn border border-3 border-secondary outline-secondary  px-2 py-1 text-white"
//               >
//                 CONTACT FOR FREE CONSULTATION +
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import React from 'react';
// import calltoaction from '../Images/cta-bg 2.png';
import calltoaction from '../Images/1bannner.png';
import './Navbar.css';
// Import call1, call2, call3 if they are being used

export default function CalltoAction() {
  const textContainerStyle = {
    position: 'absolute',
    top: '50%',
    left: '5%',
    transform: 'translateY(-50%)',
    textAlign: 'left',
    width: '40%',
    padding: '20px',
    color: 'white',
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
    position: 'relative',
  };

  const smallScreenTextContainerStyle = {
    width: '80%',
    left: '10%',
  };

  const smallScreenImgStyle = {
    width: '100%',
    height: 'auto',
    position: 'relative',
  };

  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="position-relative">
          <img src={calltoaction} alt="" style={smallScreenImgStyle} />
          {/* <div className="textOverImage" style={{ ...textContainerStyle, ...smallScreenTextContainerStyle }}>
            <h6 className="welcome text-warning fw-bold" style={{ marginTop: '9rem' }}>
              CALL TO ACTION
            </h6>
            <h1 className="contactText fs-4 fw-bold">
              GET AN EXTENSIVE AND RESULT-DRIVEN DIGITAL MARKETING PLAN TO GROW YOUR BUSINESS.
            </h1>
            <div className="">
              <button type="button" className="btn bg-warning py-2 callbtn mx-5">
                <i className="fa-regular fa-envelope"></i> MAIL US NOW
              </button>
              <button
                type="button"
                className="btn callbtn border border-3 border-secondary outline-secondary px-2 py-1 text-white">
                CONTACT FOR FREE CONSULTATION +
              </button>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
