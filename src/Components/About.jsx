import React from 'react'
import about from '../Images/2banner.png'
import about1 from '../Images/about-gallery-1.png'
import about2 from '../Images/about-gallery-2.png'
import about3 from '../Images/about-gallery-3.png'
import './Navbar.css'



export default function About() {
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
    <div>
      <div className="position-relative ">
        <img src={about} alt="" style={smallScreenImgStyle} />
      </div>
      
<div className="container-fluid">
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6 col-sm-12 py-5 px-2 aboutimg">
              <img src={about1} alt="" className='img-fluid imgone ' />
              <img src={about3} alt="" className='img-fluid  imgthree' style={{ position: "absolute", zIndex: "2", marginLeft: "-354px", marginTop: "404px" }} />
              <img src={about2} alt="" className='img-fluid imgtwo ' style={{ position: "absolute", zIndex: "3", marginTop: "17rem", border: "10px solid white", marginLeft: "-230px" }} />

            </div>
            <div className="col-md-6 py-5 mt-5">
                <p className='text-warning'>ABOUT US</p>
                <h1 style={{fontSize:"35px" ,fontWeight:"500"}}>WELCOME TO DIGINET SOCIAL!!</h1>
                <h1 className='text-warning' style={{fontSize:"35px"}}>DIGITAL MARKETING COMPANY IN NASHIK</h1>
              <p> Diginet Social is a best digital marketing company in Nashik that was launched in 2004. Since then, we aim at helping businesses to create their brand identity in the market by offering them different types of digital marketing services. We offer Digital Marketing, SEO, Social Media Marketing, Graphic Designing, PPC and We Development services.

                We have digital marketing experts on board that help businesses to grow and stand out in the competition via online marketing strategies. Our team includes graphic designers, SEO experts, social media marketers and digital marketers that have helped any small as well as medium businesses to mark their presence in the online world.

                We are known for our best digital marketing
                services in Nashik and have proven it by completing the needs of our clients at their desired time. At SpanDigit Social, we truly love what we do and you can check that in our work. Our unique marketing strategy and creative digital solutions help our customers to win in the competitive digital world.

                We believe that your investment in our services should be
                worthy and so ensure measurable results in each move.
                Our team keeps a watch on the latest trends in the
                online world and implements them in our marketing strategies
                to deliver excellent results. We constantly look forward to deliver the best
                digital marketing services to stand unique between the competitors. We commit
                to help brands grow their business with our goal
                oriented and affordable services to withstand in the
                innovating digital world.</p>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}

    </div>
  )
}
