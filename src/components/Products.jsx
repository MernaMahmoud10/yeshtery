import React from 'react';
import AdidasImg from "../images/Group 346.png"
import Img360 from "../images/Group 577.png"
import stImg from "../images/Group 575.png"
import star from "../images/Path 368.png"
import unstarred from "../images/Path 369.png"

import secImg from "../images/Group 583.png"
import thirdImg from "../images/Group 589.png"
import fourthImg from "../images/Group 597.png"
const Products = () => {
    return (
        <>
            <div className='productSection container  pb-5 mb-5'>
                <h3 className='text-secondaryColor fw-bold'>Similar Products</h3>
                <h5 className='text-muted mb-4'>You may like these products also</h5>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='px-2 borderGrey py-2'>
                            <div className='main position-relative'>
                                <img alt='firstImg' className='w-100' src={stImg} />
                                <div className='bg-light position-absolute Img360Div p-2 rounded'>
                                    <img alt='360Img' src={Img360} />
                                </div>
                            </div>
                          
                            <div className='container'>
                                <p className='fw-bold my-3 w-100'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                                <div className='w-100 d-flex align-items-center justify-content-between '>
                                    <div className='w-50 pe-1'>
                                        <h5 className='text-secondaryColor fw-bold'>9,999 LE</h5>
                                        <div className='d-flex align-items-center justify-content-between '>
                                            <span className=' text-muted w-50'>9,999 LE</span>
                                            <span className='fw-bold bg-mainColor px-1 ms-2  w-50 text-center'>50%</span>

                                        </div>

                                    </div>
                                    <div>
                                        <img alt='adidasImage' src={AdidasImg} />
                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-between mx-4 mt-3'>
                                    <div className='w-50 d-flex me-1'>
                                        <img className='w-25' alt='star' src={star} />
                                        <img className='w-25' alt='star' src={star} />
                                        <img className='w-25' alt='star' src={star} />
                                        <img className='w-25' alt='star' src={star} />
                                        <img className='w-25' alt='star' src={unstarred} />

                                    </div>
                                    <div><p className='fw-bold m-0'>4.2 of 5</p></div>



                                </div>
                                <div className='d-flex align-items-center justify-content-between mx-4 mt-3'>
                                    <p className='fw-normal m-0'>Pickup From:</p>
                                    <span className='fw-bold'>Genena Mall</span>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='px-2 borderGrey py-2'>
                            <div className='main position-relative'>
                                <img alt='secImg' className='w-100' src={secImg} />
                                <div className='bg-light position-absolute Img360Div p-2 rounded'>
                                    <img alt='360Img' src={Img360} />
                                </div>
                            </div>
                            
                            <div className='container'>
                                <p className='fw-bold my-3 w-100'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                                <div className='w-100 d-flex align-items-center justify-content-between '>
                                    <div className='w-50 pe-1'>
                                        <h5 className='text-secondaryColor fw-bold'>9,999 LE</h5>
                                        <div className='d-flex align-items-center justify-content-between  invisible'>
                                            <span className=' text-muted w-50'>9,999 LE</span>
                                            <span className='fw-bold bg-mainColor px-1 ms-2  w-50 text-center'>50%</span>

                                        </div>

                                    </div>
                                    <div>
                                        <img alt='adidasImage' src={AdidasImg} />
                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-between mx-4 mt-3'>
                                    <div className='w-50 d-flex me-1'>
                                        <img className='w-25' alt='star' src={star} />
                                        <img className='w-25' alt='star' src={star} />
                                        <img className='w-25' alt='star' src={star} />
                                        <img className='w-25' alt='star' src={star} />
                                        <img className='w-25' alt='star' src={unstarred} />

                                    </div>
                                    <div><p className='fw-bold m-0'>4.2 of 5</p></div>



                                </div>
                                <div className='d-flex align-items-center justify-content-between  mt-3'>
                                <div className='d-flex align-items-center justify-content-between me-2'>
                                    <p className='fw-normal m-0 pe-1'> From:</p>
                                    <span className='fw-bold'>UK</span>

                                </div>
                                <div className='d-flex align-items-center justify-content-between me-2'>
                                    <p className='fw-normal m-0 pe-1'>To</p>
                                    <span className='fw-bold '>Egypt</span>

                                </div>
                                <div className='d-flex align-items-center justify-content-between '>
                                    <p className='fw-normal m-0 pe-1'>In</p>
                                    <span className='fw-bold'>10</span>

                                </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='px-2 borderGrey py-2'>
                            <div className='main position-relative'>
                                <img alt='thirdImg' className='w-100' src={thirdImg} />
                                <div className='bg-light position-absolute Img360Div p-2 rounded'>
                                    <img alt='360Img' src={Img360} />
                                </div>
                            </div>
                            
                            <div className='container'>
                                <p className='fw-bold my-3 w-100'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                                <div className='w-100 d-flex align-items-center justify-content-between '>
                                    <div className='w-50 pe-1'>
                                        <h5 className='text-secondaryColor fw-bold'>9,999 LE</h5>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <span className=' text-muted w-50'>9,999 LE</span>
                                            <span className='fw-bold bg-mainColor px-1 ms-2  w-50 text-center'>50%</span>

                                        </div>

                                    </div>
                                    <div>
                                        <img alt='adidasImage' src={AdidasImg} />
                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-between mx-4 mt-3'>
                                    <div className='w-50 d-flex me-1'>
                                        <img className='w-25' alt='star' src={star} />
                                        <img className='w-25' alt='star' src={star} />
                                        <img className='w-25' alt='star' src={star} />
                                        <img className='w-25' alt='star' src={star} />
                                        <img className='w-25' alt='star' src={unstarred} />

                                    </div>
                                    <div><p className='fw-bold m-0'>4.2 of 5</p></div>



                                </div>
                                <div className='d-flex align-items-center justify-content-between mx-4 mt-3'>
                                    <p className='fw-normal m-0'>Pickup From:</p>
                                    <span className='fw-bold'>Genena Mall</span>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='px-2 borderGrey py-2'>
                            <div className='main position-relative'>
                                <img alt='fourthImg' className='w-100' src={fourthImg} />
                                <div className='bg-light position-absolute Img360Div p-2 rounded'>
                                    <img alt='360Img' src={Img360} />
                                </div>
                            </div>
                            <div className='container'>
                                <p className='fw-bold my-3 w-100'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                                <div className='w-100 d-flex align-items-center justify-content-between '>
                                    <div className='w-50 pe-1'>
                                        <h5 className='text-secondaryColor fw-bold'>9,999 LE</h5>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <span className=' text-muted w-50'>9,999 LE</span>
                                            <span className='fw-bold bg-mainColor px-1 ms-2  w-50 text-center'>50%</span>

                                        </div>

                                    </div>
                                    <div>
                                        <img alt='adidasImage' src={AdidasImg} />
                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-between mx-4 mt-3'>
                                    <div className='w-50 d-flex me-1'>
                                        <img className='w-25' alt='star' src={star} />
                                        <img className='w-25' alt='star' src={star} />
                                        <img className='w-25' alt='star' src={star} />
                                        <img className='w-25' alt='star' src={star} />
                                        <img className='w-25' alt='star' src={unstarred} />

                                    </div>
                                    <div><p className='fw-bold m-0'>4.2 of 5</p></div>



                                </div>
                                <div className='d-flex align-items-center justify-content-between  mt-3'>
                                <div className='d-flex align-items-center justify-content-between me-2 '>
                                    <p className='fw-normal m-0 pe-1'> From:</p>
                                    <span className='fw-bold'>UK</span>

                                </div>
                                <div className='d-flex align-items-center justify-content-between me-2 '>
                                    <p className='fw-normal m-0 pe-1'>To</p>
                                    <span className='fw-bold '>Egypt</span>

                                </div>
                                <div className='d-flex align-items-center justify-content-between  '>
                                    <p className='fw-normal m-0 pe-1'>In</p>
                                    <span className='fw-bold'>2 Days</span>

                                </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Products;
