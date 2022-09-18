import React from 'react';
import footerImg from "../images/footer/Group 1436.png";
import faceBook from "../images/footer/Group 1432.png";
import Instegram from "../images/footer/Group 1433.png";
import twitter from "../images/footer/Group 1434.png";
import linkedIn from "../images/footer/Group 1435.png";
import cashOnDel from "../images/footer/Rectangle 586.png";
import visa from "../images/footer/Group 1437.png";
import master from "../images/footer/Group 1438.png";
import nasnav from "../images/footer/Group 1439.png";


import { CounterContext } from '../countContext';
const Footer = () => {
    return (
        <>
            <div className='bg-dark'>
                <div className='container pt-5'>
                    <div className='row pb-3 brdrBottom'>
                        <div className='col-md-4 pe-5 brdrRight'>

                            <div className=' mb-4'>
                                <img className="w-50" src={footerImg} alt="footerImg" />

                            </div>
                            <div>
                                <p className=' text-grey fs-small mb-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                    , sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                <p className=' text-grey fs-small mb-4'>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla.
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia </p>
                                <p className=' text-grey fs-small '>m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis</p>

                            </div>



                        </div>
                        <div className=' ms-5 col-md-7'>
                            <p className=' text-grey fs-small mb-4'>Subscribe to our newsletter</p>
                            <div className='mb-5 CountInpDiv d-flex align-items-center justify-content-between bg-light rounded-pill my-3 w-75 ps-2'>
                                <input placeholder='Enter your Mail' className='border-0 bg-light text-start w-50' />

                                <button className='fw-bold bg-mainColor px-1 py-1 rounded-pill w-25 me-1 px-1'>Subscribe<i className="fa-regular ms-2 fa-paper-plane border-0"></i></button>

                            </div>
                            <div className='d-flex w-100 align-items-center justify-content-between '>

                                <div className='w-50 brdrRight'>
                                    <ul>
                                        <li className='text-grey mb-3'>About Us</li>
                                        <li className='text-grey  mb-3'>Contact Us</li>
                                        <li className='text-grey  mb-3'>Track Order</li>
                                        <li className='text-grey  mb-3'>Terms & Conditions</li>
                                        <li className='text-grey  mb-3'>Privacy Policy</li>
                                        <li className='text-grey  mb-3'>Sell With Us</li>
                                        <li className='text-grey  '>Shipping And Returns</li>

                                    </ul>

                                </div>
                                <div className='d-flex flex-column w-50  '>
                                    <div className='d-flex w-50 align-items-center justify-content-center mb-4'>
                                        <img src={faceBook} alt="faceBook" />
                                        <p className='text-grey m-0 ps-3'> /YESHTERY</p>

                                    </div>
                                    <div className='d-flex w-50 align-items-center justify-content-center mb-4'>
                                        <img src={linkedIn} alt="linkedIn" />
                                        <p className='text-grey m-0 ps-3'> /YESHTERY</p>

                                    </div>
                                    <div className='d-flex w-50 align-items-center justify-content-center mb-4'>
                                        <img src={Instegram} alt="Instegram" />
                                        <p className='text-grey m-0 ps-3'> /YESHTERY</p>

                                    </div>
                                    <div className='d-flex w-50 align-items-center justify-content-center '>
                                        <img src={twitter} alt="twitter" />
                                        <p className='text-grey m-0 ps-3'> /YESHTERY</p>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='row py-3 align-items-center'>
                        <div className='col-md-4'>
                            <p className='m-0 text-grey'>© 2021 yeshtery, all rights reserved.</p>
                        </div>
                        <div className='col-md-4 d-flex'>
                            <img src={cashOnDel} alt="cashOnDel" />
                            <img src={visa} alt="visa" />
                            <img src={master} alt="master" />

                        </div>
                        <div className='col-md-4 d-flex '>
                            <p className='m-0 text-grey'>Powered By </p>
                            <div className='w-50 ps-3'>
                                <img className='w-50' src={nasnav} alt="nasnav" />
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
