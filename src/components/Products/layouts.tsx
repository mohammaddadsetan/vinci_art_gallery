import Header from "../Header/Header"
import { Outlet } from "react-router-dom"
import DirectionStack from "../Flexcontainer"
import BoxBasic from "../Box"
import BasicGrid from "../Grid"
import { Grid2 } from "@mui/material"
import Typtext from "../Typography"
import { FadeLoader } from "react-spinners";
import InteractiveList from "./listfilter"
import ColorToggleButton from "./sortFIlter"
import { Suspense } from "react"
export default function Layouts() {
    return (
        <>
            <Suspense fallback={<FadeLoader color="red"/>}>
                <Outlet />
            </Suspense>

        </>





    )




}