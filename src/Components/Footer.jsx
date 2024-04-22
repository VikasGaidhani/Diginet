import React, { useState } from 'react';

export default function Footer() {
    // const MyForm = () => {
    // State to store form data
    // const [formData, setFormData] = useState({
    //     fullName: '',
    //     emailAddress: '',
    // });

    // // Function to handle changes in input fields
    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };

    // // Function to handle form submission
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // You can perform actions with the form data here, e.g., send it to a server
    //     console.log('Form submitted with data:', formData);
    // };
    return (
        <>
            <div className='footer'>
            <div className="container">
                <div className="row py-5" style={{borderBottom:"2px  solid #FFC107"}}>
                    <div className="col-md-4 col-sm-12">
                        <div className='text-center text-white mt-5'>
                            <h4 className='text-warning'>OUR LOCATION</h4>
                            <p className='mt-5'>B 76, NICE Area, MIDC, Satpur Nashik, Maharashtra 422007</p>
                            <div>
                                <button type="button"  style={{border:'none'}} className='bg-warning p-2 me-2'><i class="fa-brands fa-facebook-f px-1"></i></button>
                                <button type="button" style={{border:'none'}} className='bg-warning p-2  me-2'><i class="fa-brands fa-square-instagram  px-1"></i></button>
                                <button type="button" style={{border:'none'}} className='bg-warning p-2  me-2'><i class="fa-brands fa-x-twitter  px-1"></i></button>
                                <button type="button"style={{border:'none'}} className='bg-warning p-2 border-none outline-none'><i class="fa-brands fa-linkedin-in  px-1"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12  mt-5">
                        <div>
                            <h4 className='text-center text-warning'> OUR PAGES</h4>
                            <ul class="list-unstyled mt-5  text-center" style={{fontSize:"17px"}} >
                                <li >
                                <a href="#" className='text-decoration-none text-white text-center footername'>About us</a>
                                </li>
                                <li>
                                <a href="#" className='text-decoration-none text-white text-center footername'>Services</a>
                                </li>
                                <li>
                                <a href="#" className='text-decoration-none text-white text-center footername'>Contact</a>
                            </li>
                            </ul>
                                

                        </div>
                    </div>
                    <div className="col-md-4 sm-12 mt-5 text-warning">
                        <div>
                            <h4 className='text-center'>OUR SERVICES</h4>
                            <ul class="list-unstyled mt-5 text-center  " style={{fontSize:"17px"}}>
                                <li><a href="#" className='text-decoration-none text-white footername'>Basic plan</a></li>
                                <li><a href="#" className='text-decoration-none text-white footername'>Standard plan</a></li>
                                <li><a href="#" className='text-decoration-none text-white footername'>Premium plan</a></li>
                            </ul>

                        </div>
                    </div>
                    {/* <div className="col-md-3 sm-12 mt-5 text-center">
                        <h4 >NEWSLETER</h4>
                        <div className='mt-5'>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <div>
                                        
                                        <div style={{background:"#f5f9fa"}}>
                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                placeholder='enter full name'
                                                style={{ border: 'none ',background:"#f5f9fa" }}
                                                className='py-3 text-center'
                                                required

                                            /></div></div>
                                </div><br />
                                <div>
                                    
                                    <div style={{background:"#f5f9fa"}}> <input
                                        type="email"
                                        id="emailAddress"
                                        name="emailAddress"
                                        value={formData.emailAddress}
                                        onChange={handleInputChange}
                                        placeholder='enter email address'
                                        style={{ border: 'none ',background:"#f5f9fa" }}
                                                className='py-3 text-center'
                                        required
                                    />
                                    </div></div>
                                <div><br />
                                 <div className='bg-warning py-3'>   <button type="submit" className='bg-warning ' style={{border:"none",outline:"none"}}>Submit</button></div>
                                </div>
                            </form>


                        </div>
                    </div> */}

                    {/* <hr className='mt-5' style={{color:"white",borderWidth:"2 solid white"}} /> */}
                </div>
                <div className="row text-white p-5 " style={{backgroundColor:"black"}}>
                    <div className='d-flex justify-content-center'>
                    <i class="fa-regular fa-copyright mt-1"></i><span className='ps-2'> 2024 All Right Reserved.  Designed by NERDTECH(R).in</span> 
                    </div>
                </div>
            </div>

            </div>
        </>
    )
}
