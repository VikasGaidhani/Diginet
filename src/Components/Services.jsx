import React from 'react';
// import contactimg from '../Images/services.jpg';
import contactimg from '../Images/1bannner.png';

import './Services.css';

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

const Services = () => {
  const carasol = [
    {
      title: 'Digital Marketing',
      plan: 'Basic Plan',
      charges: 'Facebook Ads Charges( ₹85) / Day',
      banners: 'We will provide 5 banners and 5 videos during this period',
      Ads: 'The Ads Charges vary depending on the number of clicks per day so there may be some variation in charges',
      insta: 'New Instagram Page Create',
      Facebook: 'New Facebook Page Create',
      Monthly: 'Monthly advertising (4 Days) in a Week',
      Month: 'Monthly Charges Total = 7000/-',
      Months: '6 Month Charges Total(42,000/-) = Including Discount 39,000/-',
      Year: 'Yearly charges Total(84,000/-) = Including Discount 72,999/-'
    },
    {
      title: 'Digital Marketing',
      plan: 'Standard Plan',
      charges: 'Facebook Ads Charges( ₹120) / Day',
      banners: 'We will provide 20 banners and 10 videos during this period',
      Ads: 'The Ads Charges vary depending on the number of clicks per day so there may be some variation in charges',
      insta: 'New Instagram Page Create',
      Facebook: 'New Facebook Page Create',
      Monthly: 'Monthly advertising (4 Days) in a Week',
      Logo: 'New Logo Design',
      Month: 'Monthly Charges Total = 12,000/-',
      Months: '6 Month Charges Total(72,000/-) = Including Discount 69,000/-',
      Year: 'Yearly charges Total(1,44,000/-) = Including Discount 1,34,999/-'
    },
    {
      title: 'Digital Marketing',
      plan: 'Premium Plan',
      charges: 'Facebook Ads Charges( ₹250) / Per Day',
      banners: 'We will provide Unlimited banners and 15 videos during this period',
      Ads: 'The Ads Charges vary depending on the number of clicks per day so there may be some variation in charges',
      insta: 'New Instagram Page Create',
      Facebook: 'New Facebook Page Create',
      Google: 'Google Listing Of the business',
      Logo: 'New Logo Design',
      Youtube: 'Youtube Heading',
      Animation: 'Animation video with created voice node',
      Month: 'Monthly Charges Total = 16,000/-',
      Months: '6 Month Charges Total(96,000/-) = Including Discount 99,999/-',
      Year: 'Yearly charges Total(1,92,000/-) = Including Discount 1,82,999/-'
    },
  ];

  return (
    <>
      <div className="position-relative">
        <img src={contactimg} alt="" style={smallScreenImgStyle} />
        {/* <div className="textOverImage" style={{ ...textContainerStyle, ...smallScreenTextContainerStyle }}>
          <h6 className='welcome text-warning fw-bold'>WELCOME TO OUR COMPANY</h6>
          <h1 className='contactText display-4 fw-bold'>Our Services</h1>
        </div> */}
      </div>

      <div className="container-fluid bg-light">
        <h1 className="text-center mt-3 py-3">Offers & Promotions</h1>
        <div className="row container">
          {carasol.map((item, index) => (
            <div key={index} className="col-lg-4 mb-4">
              <div className="card mt-5 bg-dark">
                <div className="card-body">
                  {/* <h5 className="card-title">{item.title}</h5> */}
                  <p className="card-text plan">{item.plan}</p>
                  <p className="card-text"><i class="fa-solid fa-check">&nbsp;&nbsp;</i>{item.charges}</p>
                  <p className="card-text"><i class="fa-solid fa-check">&nbsp;&nbsp;</i>{item.banners}</p>
                  <p className="card-text"><i class="fa-solid fa-check">&nbsp;&nbsp;</i>{item.Ads}</p>
                  <p className="card-text"><i class="fa-solid fa-check">&nbsp;&nbsp;</i>{item.insta}</p>
                  <p className="card-text"><i class="fa-solid fa-check">&nbsp;&nbsp;</i>{item.Facebook}</p>
                  <p className="card-text"><i class="fa-solid fa-check">&nbsp;&nbsp;</i>{item.Monthly}</p>
                  <p className="card-text"><i class="fa-solid fa-check">&nbsp;&nbsp;</i>{item.Month}</p>
                  <p className="card-text"><i class="fa-solid fa-check">&nbsp;&nbsp;</i>{item.Months}</p>
                  <p className="card-text"><i class="fa-solid fa-check">&nbsp;&nbsp;</i>{item.Year}</p>
                  <p className="card-text"><i class="fa-solid fa-check">&nbsp;&nbsp;</i>{item.Year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;