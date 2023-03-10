import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Products from '../components/Products'
import Slideshow from '../components/Slideshow'

function HomePage() {
    const [products, setProducts] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        setProducts(data.data);
    }, [data]);
    return (
        <div>
            <Slideshow products={products} />
            <Products products={products} />
        </div>
    )
}

export default HomePage