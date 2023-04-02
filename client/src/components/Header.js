import React from 'react'
import { useSelector } from 'react-redux'
import logo from '../assets/logo.png'
import { TfiShoppingCart } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Header() {
    const navigate = useNavigate();
    const productData = useSelector((state) => state.tias.productData);
    const userInfo = useSelector((state) => state.tias.userInfo);
    console.log(userInfo);
    // console.log('loook here===========', productData)

    return (
        <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50'>
            <div className='max-w-screen-xl h-full mx-auto flex justify-between items-center'>
                <div>
                    <img onClick={() => navigate('/')} src={logo} alt='logo' className='w-28 cursor-pointer' />
                </div>
                <div className='flex justify-center items-center gap-4'>
                    <ul className='flex justify-evenly gap-4'
                    // className='flex items-center gap-6'
                    >
                        {/* <li onClick={() => navigate('/')} className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li> */}
                        {/* <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Pages</li> */}
                        {/* <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li> */}
                        {/* <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Element</li> */}
                    </ul>
                    {/* <div className='relative'> */}
                    <Link to='/login' className='flex flex-wrap'>
                        <img className='w-14' src={
                            userInfo ? userInfo.image : 'https://cdn-icons-png.flaticon.com/512/61/61205.png'
                        } alt='user pic' />
                        {
                            userInfo && <p className='font-bold'>{userInfo.email}</p>
                        }
                    </Link>
                    <Link to='/cart'>
                        <TfiShoppingCart className='text-2xl' />
                    </Link>

                    <strong className='text-xl'>{productData?.length}</strong>
                </div>
            </div>
        </div>
    )
};

export default Header