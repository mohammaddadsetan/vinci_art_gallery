import Header from "../Header/Header"
import { Outlet } from "react-router-dom"
import DirectionStack from "../Flexcontainer"
import BoxBasic from "../Box"
import BasicGrid from "../Grid"
import { Grid2 } from "@mui/material"
import Typtext from "../Typography"

import InteractiveList from "./listfilter"
import ColorToggleButton from "./sortFIlter"
import SimpleContainer from "../Container"
import productsimg from '../../img/products.jpeg'
import Linkedbutton from "../Linkedbutton"
import ProductsSlider from "./productsSlider"
import { Opacity, Padding } from "@mui/icons-material"
import BasicChips from "./chip"
export default function Productsinfo() {
    return (
        <>
            <SimpleContainer custom={{ height: "100vh", position: "relative" }}>
                <img src={productsimg} className="WH100" style={{ objectFit: "cover", opacity: ".60" }} alt="" />
                {/* <ProductsSlider /> */}
                <BoxBasic
                    custom={{
                        width: "100%",
                        position: "absolute",
                        top: "15%",
                        textAlign: "center",
                    }}>
                    <Typtext custom={{ marginBottom: "2%" }} variant={"h4"}>PRODUCTS</Typtext>
                    <Typtext custom={{ letterSpacing: "30%", wordSpacing: "20px" }} variant={"subtitle1"}>Thank   you   for   supporting   the   art</Typtext>

                    <DirectionStack gapspace={3} direct={"row"} sx={{ padding:"2em",justifyContent:"center"}}>
                        <BasicChips custom={{width:"10%"}} label="Music"/>
                        <BasicChips custom={{width:"10%"}} label="Music"/>
                        <BasicChips custom={{width:"10%"}} label="Music"/>
                        <BasicChips custom={{width:"10%"}} label="Music"/>
                        <BasicChips custom={{width:"10%"}} label="Music"/>

                    </DirectionStack>


                </BoxBasic>
            </SimpleContainer>




        </>

    )




}