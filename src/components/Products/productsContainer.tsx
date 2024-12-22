import  { fetchProducts,ProductTyp } from "../../api";
import { Grid2 } from "@mui/material"
import MultiActionAreaCard from "./cards"
import { Link, useLoaderData } from "react-router-dom"
import { useState, useEffect } from "react";
export default function Products() {
    // const [Products, setProducts] = useState<ProductTyp[]>([]);
    const {productsfilter}=useLoaderData() as {productsfilter:ProductTyp[]}
    // useEffect(() => {
    //     setProducts(productsfilter)
        
    // },[]);
    

    return <MultiActionAreaCard products={productsfilter}/>;
}

