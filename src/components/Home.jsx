import React, { useContext } from 'react';
import Products from './Products';

import mainProdImg from "../images/Group 335@2x.png"
import AdidasImg from "../images/Group 346.png"
import Img360 from "../images/Group 338.png"

import prev from "../images/Path 347.png"
import stImg from "../images/Group 333.png"
import secImg from "../images/Group 331.png"
import thirdImg from "../images/Group 329.png"
import fourthImg from "../images/Group 335.png"
import next from "../images/Path 346.png"

import star from "../images/Path 368.png"
import unstarred from "../images/Path 369.png"
import color1 from "../images/Group 354.png"
import color2 from "../images/Group 356.png"
import { CounterContext } from '../countContext';

const Home = () => {
    const { count, increaseCount, decreaseCount, addToCart } = useContext(CounterContext);

    return (
        <>
            <nav className="navbarHome  navbar-light bg-light py-3">
                <div className='container'>

                    <a className='fw-bold  text-dark me-2' href="#"> Men </a>
                    <span className='fw-bold  text-dark'>/</span>
                    <a className='fw-bold text-dark me-2' href="#"> Clothing </a>
                    <span className='fw-bold  text-dark'>/</span>

                    <a className='fw-bold text-dark me-2' href="#"> Tops </a>
                    <span className='fw-bold  text-dark'>/</span>

                    <a className='fw-bold text-dark me-2' href="#"> Adidas </a>
                    <span className='fw-bold  text-dark'>/</span>

                    <span className='fw-bold  text-dark'> Adidas Black T-Shirt </span>
                </div>
            </nav>
            <div className="container">
                <div className="row py-5 align-items-center">
                    <div className='col-md-5'>
                        <div className='main position-relative'>
                            <img className="w-100" src={mainProdImg} alt="productImg" />
                            <div className='bg-light position-absolute Img360Div p-2 rounded'>
                                <img alt='360Img' src={Img360} />
                            </div>
                        </div>
                        <div className='col-md-4 d-flex justify-content-between align-items-center my-4'>
                            <img className='w-25 h-25 me-1' alt='previous' src={prev} />
                            <img alt='firstImg' className='me-2' src={stImg} />
                            <img alt='secondImg' className='me-2' src={secImg} />
                            <img alt='thirdImg' className='me-2' src={thirdImg} />
                            <img alt='fourthImg' className='me-2' src={fourthImg} />
                            <img className='w-25 h-25' alt='next' src={next} />

                        </div>
                    </div>

                    <div className='col'></div>
                    <div className='col-md-6 '>
                        <div className='brdrBottom'>
                            <img alt='adidasImage' src={AdidasImg} />
                            <p className='fw-bold my-3 w-75'>Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            <span className='fw-bold text-muted'>Men</span>
                            <div className='row align-items-center justify-content-between w-75  my-3'>
                                <div className='col-md-4 d-flex '>
                                    <img alt='star' src={star} />
                                    <img alt='star' src={star} />
                                    <img alt='star' src={star} />
                                    <img alt='star' src={star} />
                                    <img alt='star' src={unstarred} />

                                </div>
                                <div className='col-md-4'>
                                    <p className='fw-bold m-0'>4.9 of 5</p>
                                </div>
                                <span className='fw-bold text-muted col-md-4'>22 Rates</span>
                            </div>
                            <div className='row align-items-center justify-content-center w-75 mb-3'>
                                <h6 className='fw-bold text-secondaryColor m-0 col-md-4'>9,999 LE</h6>

                                <div className='col-md-4'>
                                    <span className='fw-bold text-muted'>9,999 LE</span>

                                </div>
                                <span className='fw-bold bg-mainColor px-2 py-1 col-md-4 text-center'>30% Off</span>
                            </div>

                        </div>
                        <div className='brdrBottom my-3'>
                            <h5 className='fw-bold m-0 col-md-4'>Size</h5>
                            <div className='d-flex align-items-center justify-content-between w-100 my-3'>
                                <p className='d-flex align-items-center justify-content-center sizeSpan fw-bold text-secondaryColor px-2 py-1  text-center rounded-circle borderGrey'>small</p>
                                <p className='d-flex align-items-center justify-content-center sizeSpan fw-bold text-secondaryColor px-2 py-1  text-center rounded-circle borderGrey'>medium</p>
                                <p className='d-flex align-items-center justify-content-center sizeSpan fw-bold  px-2 py-1 col-md-4 text-center rounded-circle bg-grey'>large</p>
                                <p className='d-flex align-items-center justify-content-center sizeSpan fw-bold text-secondaryColor px-2 py-1  text-center rounded-circle borderGrey'>x-large</p>
                                <p className='d-flex align-items-center justify-content-center sizeSpan fw-bold text-secondaryColor px-2 py-1  text-center rounded-circle borderGrey'>xx-large</p>

                            </div>

                        </div>
                        <div className='brdrBottom my-3'>
                            <h5 className='fw-bold m-0 col-md-4'>Color</h5>
                            <div className='d-flex align-items-center justify-content-start w-75 my-3'>
                                <img src={color1} alt="firstcolor" className='me-3' />
                                <img src={color2} alt="secColor" />

                            </div>

                        </div>

                        <div className=' my-3'>
                            <div className='w-75'>
                                <h5 className='fw-bold m-0 col-md-4'>Quantity</h5>

                                <div className='CountInpDiv d-flex align-items-center justify-content-between bg-light rounded-pill my-3 w-50 px-1'>
                                    <i onClick={decreaseCount} className="px-2 iconCount fa-solid fa-minus me-2 d-flex align-items-center justify-content-center fw-bold bg-mainColor  text-center rounded-circle "></i>
                                    <input placeholder='count' className='border-0 bg-light text-center w-50' value={count} />
                                    <i onClick={increaseCount} className="px-2 iconCount fa-solid fa-plus me-2 d-flex align-items-center justify-content-center fw-bold bg-mainColor  text-center rounded-circle "></i>

                                </div>
                                <div className='d-flex flex-row w-100 mb-3'>
                                    <button onClick={addToCart} className='fw-bold text-white bg-secondaryColor  py-2 rounded-pill w-50 me-3 px-1'>Add To Cart</button>
                                    <button className='fw-bold bg-mainColor px-3 py-1 rounded-pill w-50 me-1 px-1'>Pickup From Store</button>

                                </div>
                            </div>



                        </div>


                    </div>

                </div>
                <div className="row"></div>
            </div>
            <Products />

        </>
    );
}

export default Home;
