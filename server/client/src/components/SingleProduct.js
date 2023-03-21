import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
// import productsData from '../api/api';
import { SiSurveymonkey } from 'react-icons/si';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/tiasSlice';
import { ToastContainer, toast } from 'react-toastify';


function SingleProduct() {
    const dispatch = useDispatch();
    const [details, setDetails] = useState({})
    let [baseQty, setBaseQty] = useState(1);
    // console.log();


    const location = useLocation();
    useEffect(() => {
        setDetails(location.state.item);
    }, [location.state.item]);
    return (
        <div>
            <div className='max-w-screen-xl mx-auto my-10 flex gap-10'>
                <div className='w-2/5 relative grid-cols-1 items-center'>
                    <img src={details.image} alt={details.title}
                        className='w-[300px]' />
                    <div className='flex gap-5 text-2xl md:pl-10'>
                        <SiSurveymonkey className='f' />
                        <SiSurveymonkey />
                        <SiSurveymonkey />
                        <SiSurveymonkey />
                        <SiSurveymonkey />
                    </div>
                    <p className='font-light  pl-10 md:pl-20'>(customer review)</p>
                </div>
                <div className='w-3/5'>
                    <div>
                        <h1 className='text-2xl font-bold'>{details.title}</h1>
                        <p>{details.description}</p>
                        <div className='mt-10 flex flex-wrap justify-center'>
                            <div className='flex gap-4 items-center font-bold'>
                                <p className='text-sm' >Quantity</p>
                                <AiOutlineMinus
                                    onClick={() => setBaseQty(baseQty === 1 ? baseQty = 1 : baseQty - 1)}
                                    className='text-xl cursor-pointe hover:scale-150 hover:bg-gray-700 hover:text-white' />
                                <span>{baseQty}</span>
                                <AiOutlinePlus
                                    onClick={() => setBaseQty(baseQty + 1)}
                                    className='text-xl cursor-pointer hover:scale-150 hover:bg-gray-700 hover:text-white' />
                            </div>
                            <button onClick={() => dispatch(addToCart({
                                id: details.id,
                                title: details.title,
                                price: details.price,
                                image: details.image,
                                quantity: baseQty,
                                description: details.description,
                            })
                            ) & toast.success(`${details.title} is added`)
                            }
                                className=' py-3 px-6 border-2 text-white bg-black'>add to cart</button>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-2 text-base'>
                </div>
            </div>
            <p className='text-base text-gray-600 text-center'>Category: <span className='font-medium capitalize'> {details.category}</span></p>
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark" />
        </div>
    )
}

export default SingleProduct