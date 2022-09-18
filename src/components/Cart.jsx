import React, { useContext } from 'react';
import mainImg from "../images/Group 1441.png";
import { CounterContext } from '../countContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, setcartItems } = useContext(CounterContext);
    let navigate = useNavigate();

    function navigatToHome() {
        navigate("/yeshtery");
    }

    function removeElements() {
        setcartItems(0)
    }
    const price = 9.999;
    let total = price * cartItems
    return (
        <>
            <div className='cartDiv position-fixed top-0 end-0 start-0 bottom-0 vh-100'>
                <div className='w-25 vh-100 bg-white position-absolute top-0 end-0 '>
                    <div className=' w-100 py-4'>
                        <i class="fa-solid fa-xmark position-absolute closeIcon" onClick={navigatToHome}></i>
                    </div>
                    {cartItems ?
                        <>

                            <h4 className='text-center text-secondaryColor mb-5'>My Cart</h4>
                            <div className='container'>
                                <h6 className='fw-bold mb-5'>Cart Summary</h6>
                                <div className="d-flex p-2 align-items-center justify-content-between borderGrey rounded">
                                    <div className=''>
                                        <div className='main position-relative'>
                                            <img className="" src={mainImg} alt="mainImg" />

                                        </div>

                                    </div>


                                    <div className='w-75 ps-3'>

                                        <p className='fw-bold mb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        <span className='fw-bold ='>Quantity: </span><span>{cartItems}</span>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <h6 className='fw-bold text-secondaryColor m-0 '>9,999 LE</h6>


                                            <button className='fw-bold bg-mainColor py-1 px-2 rounded text-center' onClick={removeElements}>Remove</button>
                                        </div>

                                    </div>

                                </div>
                                <h4 className='fw-bold my-5 text-center'>Total : {total} LE</h4>
                                <div className='d-flex flex-row w-100 '>
                                    <button className='fw-bold bg-mainColor px-3 py-1 rounded-pill w-50 me-1 px-1'>Review Cart</button>
                                    <button className='fw-bold text-white bg-secondaryColor  py-2 rounded-pill w-50  px-1'>Complete Checkout</button>

                                </div>

                            </div>

                        </> : <>
                            <h4 className='text-center text-secondaryColor mb-5'>My Cart</h4>

                            <div className='d-flex flex-column align-items-center justify-content-center vh-100'>
                                <i className="fa-solid fa-cart-shopping fs-1 text-muted"></i>
                                <p className='text-muted fw-bold m-0 pt-5 fs-5'>please add Items to your Cart</p>
                            </div>
                        </>}


                </div>
            </div>

        </>
    );
}

export default Cart;
