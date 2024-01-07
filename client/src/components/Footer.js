import React from 'react'
import logo from '../assets/logo.png'
// import payment from '../assets/payment.png'
import { BsGithub, BsTwitter, BsLinkedin, BsPersonWorkspace } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

// BsGithub BsTwitter BsLinkedin MdEmail
// MdAccountCircle MdOutlineShoppingCartCheckout MdAddHomeWork


function Footer() {
    const navigate = useNavigate();
    return (
        <div className=' bg-black text-[#949494] flex gap-4'>
            <div className='max-w-screen-xl mx-auto grid grid-cols-3 gap-10 md:gap-60 lg:grid lg:grid-cols-3'>
                <div className='cursor-pointer' onClick={() => {
                    navigate('/')
                }}>
                    <img className='w-full' src={logo} alt='logo' />
                </div>
                <div className='flex flex-col gap-4 justify-center'>
                    {/* <h2 className='text-2xl font-semibold'>Contact me</h2> */}
                    <a href='mailto:j.c.ashley4363@gmail.com' className='flex items-center hover:text-white hover:cursor-pointer'><span><MdEmail /></span>email me</a>
                    <a href='https://jcashleyportfolio.netlify.com' className='flex items-center hover:text-white hover:cursor-pointer'><span><BsPersonWorkspace /></span>my other work</a>

                </div>
                <div className='flex flex-col gap-4 justify-center'>
                    <a href='https://jcashleyportfolio.netlify.app' className='text-sm tracking-wide hover:text-white'>Created by JC Ashley</a>

                    <div className='flex gap-6 text-lg text-gray-400'>
                        <a href='https://github.com/Messyginger0804'> <BsGithub className='hover:text-white duration-300 cursor-pointer' /> </a>
                        <a href='https://twitter.com/Messyginger0804'><BsTwitter className='hover:text-white duration-300 cursor-pointer' /> </a>
                        <a href='https://www.linkedin.com/in/jeremy-ashley-webdev/'> <BsLinkedin className='hover:text-white duration-300 cursor-pointer' /> </a>
                    </div>
                    {/* <div> */}
                    {/* <h2 className='text-2xl font-semibold'>Profile</h2>
                    <p className='flex items-center'> <span><MdAccountCircle /></span> my account</p>
                    <p className='flex items-center'> <span><MdOutlineShoppingCartCheckout /></span> check out</p>
                    <p className='flex items-center'> <span><MdAddHomeWork /></span> my account</p> */}
                </div>
                {/* <div className='flex flex-col justify-center invisible lg:visible'>
                    <input className='bg-transparent border px-4 py-2 text0sm' type='email' />
                    <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black
            ' >Subcribe</button>
                </div> */}

            </div>
        </div>
    )
}

export default Footer