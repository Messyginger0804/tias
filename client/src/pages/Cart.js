import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import CartItem from '../components/CartItem';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { resetCart } from '../redux/tiasSlice';

const banner = `https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?cs=srgb&dl=pexels-dana-tentis-370799.jpg&fm=jpg`

// pk_test_51McYg7AF869aBXLnnPvk3Dmc8th1P8yi5Ij2YntbTkh3YBcqDXak6agfKEuzHVWuScqwANOoF8Y6sQgW94dbXTZ900x74CplhU


function Cart() {
    const dispatch = useDispatch()
    const productData = useSelector((state) => state.tias.productData);
    const userInfo = useSelector((state) => state.tias.userInfo);
    // console.log(productData);
    const [totalAmount, setTotalAmount] = useState('');
    const [payNow, setPayNow] = useState(false);

    useEffect(() => {
        let price = 0;
        productData.map((item) => {
            price += item.price * item.quantity;
            return price;
        })
        setTotalAmount(price.toFixed(2));
    }, [productData])

    const handleCheckout = () => {
        if (userInfo) {
            setPayNow(true)

        } else {
            toast.error('please sign in to purchase')
        }
    }
    const payment = async (token) => {
        await axios.post(`http://localhost:8000/pay`, {
            amount: totalAmount * 100,
            token: token,
        })
        toast.success('payment successful') &&
            dispatch(resetCart())
    }
    return (
        <div>
            <img src={banner}
                alt='checkout-banner'
                className='w-full h-60 object-cover'
            />
            <div className='max-w-screen-xl mx-auto py-20 flex'>
                <CartItem />
                <div className='w-1/3 bg=[fafafa] py-6 px-4'>
                    <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-500 pb-6'>
                        <h2 className='text-2xl font-medium'>Cart Totals</h2>
                        <p className='flex item-center gap-4 text-base'>
                            Subtotal{''}
                            <span className='font-bold text-lg'>
                                {/* ${totalAmount} */}
                            </span>
                        </p>
                        <p className='flex items-start gap-4 text-base'>
                            Shipping{''}
                            <span>3820 black oak dr Dallas, TX 75241</span>
                        </p>
                    </div>
                    <p className='font-semibold flex justify-between mt-6'>
                        Total <span className='text-2xl font-bold'>${totalAmount}</span>
                    </p>
                    <button onClick={handleCheckout} className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-200'>proceed to checkout</button>
                    {payNow && (<div>
                        <StripeCheckout
                            stripeKey='pk_test_51McYg7AF869aBXLnnPvk3Dmc8th1P8yi5Ij2YntbTkh3YBcqDXak6agfKEuzHVWuScqwANOoF8Y6sQgW94dbXTZ900x74CplhU'
                            name='Tias Online Shopping'
                            amount={totalAmount * 100}
                            label='pay to tia'
                            description={`Your Payment amount is $${totalAmount}`}
                            token={payment()}
                            email={userInfo.email}
                        />
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cart