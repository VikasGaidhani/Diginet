import React from 'react'
// import Navbar from './Navbar'
import home1 from '../Images/home1.webp'
import Counter from './Counter'
// import OurServices from './OurServices'
import CalltoAction from './CalltoAction'
// import Footer from './Footer'
import videofile from '../Images/video.mp4'

// import 'https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap';

export default function Home() {
  return (
    <>

      <div className="container-fluid bg-dark mt-0">

        <div className="row">
          {/* <Navbar/> */}
          {/* <img src={} alt="" /> */}
          <video src={videofile} autoPlay muted type="video/mp4" ></video>
          {/* <video src="https://spandigitsocial.com//front_assets/img/home/banner.mp4" autoPlay muted type="video/mp4"  ></video> */}
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 position-relative">
            <img src={home1} alt="" className='img-fluid ps-5 mt-5' />
            <div className='imgdiv position-absolute d-flex justify-content-center align-item-center '>
              <div>
                
               <b className='divimg '>15</b><span>+</span>
                
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className='mt-5'>
              <span className='text-warning  ps-5 mb-5'>ABOUT DIGINET SOCIAL</span>
              <div className='ps-5  '>
                <h1 className='mt-5 '>GET AMEZING RESULT <br />
                  <span className='text-warning '><b>WITH SOLID TEAM</b></span></h1>
              </div>
              <div className='px-5'>
                <p className='para1'>Diginet Social is not just a Digital Marketing Agency but an end to end hub for everything you need to have significant presence and generating revenue through online marketing efforts.

                </p>
              </div>
              <div className='px-5 pb-5'>
                <p>Our team of designers, developers, and strategists have successfully launched start-ups as well as transformed weak brands into online marketing benchmarks. We are continually making ourselves better each day with technology getting better and more exciting.
                </p>
              </div>
              <div className='px-5'>
                <p><span className='text-warning'>---</span> SEARCH INGINE OPTIMIZATION</p>
                <p><span className='text-warning'>---</span> WEBSITE DESIGN & DEVELOPMENT</p>
                <p><span className='text-warning'>---</span> SOCIAL MEDIA MARKETING</p>
                <p><span className='text-warning'>---</span> PPC SERVICES (LEAD GENERATION)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Counter/>
      {/* <OurServices/> */}
      <CalltoAction/>
      {/* <Footer/> */}
    </>


  )

}
