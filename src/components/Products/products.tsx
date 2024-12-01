import fetchProducts, { Product } from "../../api";
import { Grid2 } from "@mui/material"
import MultiActionAreaCard from "./cards"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
export default function Products() {
    const [Products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetchProducts().then((Products) => {
            setProducts(Products);
console.log(Products)
        })
    },[]);

    return <MultiActionAreaCard products={Products}/>;
}

