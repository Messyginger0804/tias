import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { BsTrash, BsArrowReturnLeft } from 'react-icons/bs';
import { addToQuantity, deleteFromCart, minusFromQuantity, resetCart } from '../redux/tiasSlice';
import { ToastContainer, toast } from 'react-toastify';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
// import { TfiShoppingCart } from 'react-icons/tfi';



function CartItem() {
    const dispatch = useDispatch();
    const productData = useSelector((state) => state.tias.productData);
    // console.log(productData);

    // const itemTotal = (item.quantity * item.price)

    return (
        <div className='w-2/3 pr-10'>
            <div className='w-full'>
                <h2 className='text-2xl'>shopping cart</h2>
            </div>
            <div>
                {
                    productData.map((item) =>
                    (
                        <div key={item.id}
                            className='flex items-center justify-between gap-6 mt-6'>
                            <div className='flex items-center gap-2'>
                                <img className='w-32 h-32 object-cover'
                                    src={item.image}
                                    alt={item.name}
                                />
                            </div>
                            <div className='w-52'>
                                <h2 className=''>{item.title}</h2>
                                <p className='w-10 font-bold text-xl'>${item.price}</p>
                            </div>
                            <div className='items-center'>
                                {/* <p>{item.quantity}</p> */}
                                <div className='items-center'>
                                    <div className='flex gap-4 items-center font-bold'>
                                        {/* <p className='text-sm' >Quantity</p> */}
                                        <BsTrash onClick={() => dispatch(
                                            deleteFromCart(item.id)
                                        ) & toast.error(`${item.title} is removed`)} className='text-xl text-gray-600 hover:text-red-600 curosr-pointer duration-300' />
                                        <AiOutlineMinus
                                            onClick={() =>
                                                dispatch(minusFromQuantity({
                                                    id: item.id,
                                                    title: item.title,
                                                    image: item.image,
                                                    price: item.price,
                                                    quantity: 1,
                                                    description: item.description,
                                                })
                                                )
                                            }
                                            className='text-xl cursor-pointe hover:scale-150 hover:bg-gray-700 hover:text-white' />
                                        <span>{item.quantity}</span>
                                        <AiOutlinePlus
                                            onClick={() =>
                                                dispatch(addToQuantity({
                                                    id: item.id,
                                                    title: item.title,
                                                    image: item.image,
                                                    price: item.price,
                                                    quantity: 1,
                                                    description: item.description,
                                                })
                                                )
                                            }
                                            className='text-xl cursor-pointer hover:scale-150 hover:bg-gray-700 hover:text-white' />
                                    </div>
                                    <p className='flex justify-end text-2xl font-bold'>${item.quantity * item.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

            <button onClick={() => dispatch(resetCart()) & toast.error('Your Cart is Empty!')} className='bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-900 duration-300'>clear your cart</button>
            {/* <Link></Link> */}
            <Link to='/'>
                <button className='mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300'>
                    <BsArrowReturnLeft />
                    <span>return to shopping</span>

                </button>
            </Link>
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
                theme="dark"
            />
        </div >
    )
}

export default CartItem