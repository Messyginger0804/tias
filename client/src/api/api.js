import axios from "axios";

export default async function productsData() {
    const products = await axios.get("https://fakestoreapiserver.reactbd.com/amazonproducts");
    console.log('where are my products', products);

    return products;
}