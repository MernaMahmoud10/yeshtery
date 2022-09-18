import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CounterContext } from '../countContext';

const Navbar = () => {
    const { cartItems } = useContext(CounterContext);

    return (
        <div>
            <div className="navbar navbar-expand-sm bg-mainColor">
                <div className="container">
                    <div className='d-flex align-items-center justify-content-between w-100'>
                        <div className='navbar-brand '>
                            <img className="pe-4" src={process.env.PUBLIC_URL + '/Group 770.png'} alt="mkdk" />
                            <img src={process.env.PUBLIC_URL + '/Group 769.png'} alt="mkdk" />

                        </div>
                        <div className='d-flex '>
                            <p className='m-0'>Valentine’s Day Offers! Buy Two Get One Free </p><a className='fw-bold ps-2 m-0 text-dark' href='#'> Shop Now</a>
                        </div>


                        <div className='d-flex'>
                            <div className='d-flex align-items-center pe-4' >
                                <img src={process.env.PUBLIC_URL + '/Group 756.png'} alt="mkdk" />
                                <p className='m-0 fw-bold ps-2'>contact Us</p>
                            </div>
                            <div className='d-flex align-items-center pe-4' >
                                <img src={process.env.PUBLIC_URL + '/Group 758.png'} alt="mkdk" />
                                <p className='m-0 fw-bold ps-2'>Track Order</p>
                            </div>
                            <div className='d-flex align-items-center' >
                                <img src={process.env.PUBLIC_URL + '/Group 753.png'} alt="mkdk" />
                                <p className='m-0 fw-bold ps-2'>Find A Store</p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">
                    <div className='d-flex align-items-center justify-content-between w-100'>
                        <div className='inputDiv d-flex align-items-center bg-white p-2 rounded-pill'>
                            <i class="fa-solid fa-magnifying-glass px-2"></i>
                            <input placeholder='search' className='searchInput border-0' />
                        </div>
                        <div className='d-flex '>
                            <img src={process.env.PUBLIC_URL + '/Group 745.png'} alt="brand" />
                        </div>


                        <div className='d-flex'>
                            <Link to="cart">
                                <div className='d-flex align-items-center pe-4' >
                                    <div className='position-relative'>
                                        <img src={process.env.PUBLIC_URL + '/Path 772.png'} alt="Cart" />
                                        <div className='cartItems position-absolute bg-mainColor rounded-circle d-flex align-items-center justify-content-center'>{cartItems}</div>
                                    </div>
                                    <p className='m-0 fw-bold ps-2'>Cart</p>
                                </div>
                            </Link>
                            <div className='d-flex align-items-center pe-4' >
                                <img src={process.env.PUBLIC_URL + '/Path 771.png'} alt="Wishlist" />
                                <p className='m-0 fw-bold ps-2'>Wishlist</p>
                            </div>
                            <div className='d-flex align-items-center' >
                                <img src={process.env.PUBLIC_URL + '/Path 773.png'} alt="Login" />
                                <p className='m-0 fw-bold ps-2'>Login</p>
                            </div>
                        </div>

                    </div>


                </div>
            </nav>
            <nav className="navbar navbar-expand-sm navbar-light bg-dark">
                <div className="container">


                    <ul class="navbar-nav d-flex align-items-center justify-content-between w-100">
                        <li class="nav-item">
                            <a class="text-white fw-bold nav-link">Men</a>
                        </li>
                        <li class="nav-item">
                            <a class="text-white fw-bold nav-link">Women</a>
                        </li>
                        <li class="nav-item">
                            <a class="text-white fw-bold nav-link">UniSex</a>
                        </li>
                        <li class="nav-item">
                            <a class="text-white fw-bold nav-link">Kids</a>
                        </li>
                        <li class="nav-item">
                            <a class="text-white fw-bold nav-link">Best Sellers</a>
                        </li>
                        <li class="nav-item">
                            <a class="text-white fw-bold nav-link">Ner Arrivals</a>
                        </li>
                        <li class="nav-item">
                            <a class="text-danger fw-bold nav-link">Offers</a>
                        </li>

                    </ul>
                </div>



            </nav>
        </div>
    );
}

export default Navbar;

