import React from 'react'
import { BsCartPlusFill } from 'react-icons/bs';
import { MdDescription } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/tiasSlice';
import { ToastContainer, toast } from 'react-toastify';


//maye i sdlfjlds 

function ProductCard({ product }) {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const itemId = product.id;

    const handleEvent = () => {
        navigate(`products/${itemId}`, {
            state: {
                item: product
            },
        });
    }


    // console.log(itemId)
    return (
        <div className='group'>
            <div className='text-center text-xl font-bold'>{product.category}</div>
            <div onClick={handleEvent} className='w-full cursor-pointer overflow-hidden'>
                <img className='w-full h-full object-cover group-hover:scale-110 duration-500' src={product.image} alt={product.name} />
            </div>

            <div className='w-full border-[1px] px-2 py- relative overflow-hidden'>
                {/* <div className='flex justify-between items-center'> */}
                <div className='text-base font-bold text-center'>
                    <h2>{product.title.substring(0, 15)}</h2>
                </div>
                {/* <div>{product.rating}</div> */}
                <div className='flex gap-2 justify-evenly'>
                    {/* <p className='hover:translate-x-24 transition-transform duration-500'> */}
                    <p className='group-hover:scale-110 duration-500 '>
                        ${product.price}</p>
                    {/* <p className='absolute z-10 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-2 transition-transform cursor-pointer duration-300'> */}
                    <p onClick={() => dispatch(addToCart({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.image,
                        quantity: 1,
                        category: product.category,
                        // description: product.description
                    })
                    ) & toast.success(`${product.title} is added`)
                    }><BsCartPlusFill className='text-xl group-hover:scale-150 duration-500 cursor-pointer' /></p>
                </div>
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
        </div>
    )
}

export default ProductCard