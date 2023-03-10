import React from 'react'
import ProductCard from './ProductCard'

function Products({ products }) {
    // console.log(products);

    return (
        <div className='py-10'>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>
                    shopping everday</h1>
                <span className='w-20 h-1 bg-black'></span>
                <p className='max-w-[700px] text-gray-600 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='grid grid-cols-4 gap-8 max-w-screen-xl mx-auto py-10'>
                {
                    products.map((item) => (
                        <ProductCard key={item.id} product={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products