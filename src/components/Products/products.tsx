import  { fetchProducts,ProductTyp } from "../../api";
import { Grid2 } from "@mui/material"
import MultiActionAreaCard from "./cards"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
export default function Products() {
    const [Products, setProducts] = useState<ProductTyp[]>([]);
    useEffect(() => {
        fetchProducts().then((Products) => {
            setProducts(Products);

        })
    },[]);

    return <MultiActionAreaCard products={Products}/>;
}

