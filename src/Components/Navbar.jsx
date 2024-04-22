// import React from 'react';
// // import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import './Navbar.css'
// import {Link} from "react-router-dom"


// export default function Navbar() {
//   return (
    
//       <nav class="navbar navbar-expand-lg bg-body-tertiary mb-0 position-Fixed ">
//         <div class="container-fluid bg-dark border-bottom border-warning border-5 p-3 ">
//           <a class="navbar-brand text-white fs-4" href="#">DIGINET</a>
//           <button class="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon "></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//               <li class="nav-item">
//               <Link rel="stylesheet" to="/" className='text-warning active text-decoration-none ms-5'>HOME</Link>
//                 {/* <a class="nav-Link active text-warning" aria-current="page" href="#">HOME</a> */}
//               </li>
//               <li class="nav-item">
//                 <Link rel="stylesheet" to="/about" className='text-white text-decoration-none ms-3 abc' >ABOUT US</Link>
//                 {/* <a class="nav-Link text-white" href="#">ABOUT US</a> */}
//               </li>
//               <li class="nav-item">
//               <Link rel="stylesheet" to="/services" className='text-white text-decoration-none ms-3 abc' >SERVICES</Link>
//                 {/* <a class="nav-Link text-white" href="#">SERVICES</a> */}
//               </li>
//               <li class="nav-item">
//               <Link rel="stylesheet" to="/contact" className='text-white text-decoration-none ms-3 abc' >CONTACT US</Link>
//                 {/* <a class="nav-Link text-white" href="#">CONTACT</a> */}
//               </li>
//             </ul>

            
          
//           <div class="bg-warning ">
//               <button class="btn">
//                 <span><i class="fas fa-phone-flip "></i> PHONE NUMBER<br />+91 1234567890</span>
//               </button>
//             </div> 
//             </div> 
//         </div>
//       </nav>
    
//   );
// }

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-0 position-Fixed">
      <div className="container-fluid bg-dark border-bottom border-warning border-5 p-3">
        <NavLink to="/" className="navbar-brand text-white fs-4" activeClassName="">
          DIGINET
        </NavLink>
        <button
          className={`navbar-toggler bg-warning ${isNavOpen ? 'collapsed' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isNavOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link text-decoration-none ms-5 "
                activeClassName="active"
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link text-decoration-none ms-3 abc "
                activeClassName="active"
              >
                ABOUT US
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                className="nav-link text-decoration-none ms-3 abc "
                activeClassName="active"
              >
                SERVICES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link text-decoration-none ms-3 abc"
                activeClassName="active"
              >
                CONTACT US
              </NavLink>
            </li>
          </ul>

          <div className="bg-warning">
            <button className="btn ">
              <span className='text-white'>
                <i className="fas fa-phone-flip"></i> PHONE NUMBER
                <br />
                +91 1234567890
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
