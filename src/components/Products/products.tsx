
import { Grid2 } from "@mui/material"
import MultiActionAreaCard from "./cards"
import { Link } from "react-router-dom"
export default function Products() {
    return (
        <>
                    <Link to={"/products/paints/vanGogh"}> <MultiActionAreaCard /></Link>
                    <MultiActionAreaCard />
                    <MultiActionAreaCard />
                    <MultiActionAreaCard />




                    <MultiActionAreaCard />
                    <MultiActionAreaCard />
                    <MultiActionAreaCard />
                    <MultiActionAreaCard />



                    <MultiActionAreaCard />
                    <MultiActionAreaCard />
                    <MultiActionAreaCard />
                    <MultiActionAreaCard />

                    </>


                

    )
}