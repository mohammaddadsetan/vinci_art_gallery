import Header from "../Header/Header"
import { Outlet } from "react-router-dom"
import DirectionStack from "../Flexcontainer"
import BoxBasic from "../Box"
import BasicGrid from "../Grid"
import { Grid2 } from "@mui/material"
import Typtext from "../Typography"
import { Link } from "react-router-dom"
import InteractiveList from "./listfilter"
import ColorToggleButton from "./sortFIlter"
import SimpleContainer from "../Container"
import productsimg from '../../img/products.jpeg'
import Linkedbutton from "../Linkedbutton"
// import ProductsSlider from "./productsSlider"

import BasicChips from "./chip"
import { Margin, Padding } from "@mui/icons-material"
import SlideshowBackground from "./ProductsSlider"
import img1 from '../..//img/products.jpg'
import img2 from '../..//img/products1.jpg'
import img3 from '../..//img/products2.jpg'
import img4 from '../..//img/products3.jpg'
export default function Productsinfo() {
    return (
        <>
            <SimpleContainer custom={{ height: "100vh", position: "relative" }}>
                {/* <img src={productsimg} className="WH100" style={{ objectFit: "cover", opacity: ".60" }} alt="" /> */}
                <SlideshowBackground img1={img1} img2={img2} img3={img3} img4={img4}/>
                <BoxBasic
                    custom={{
                        width: "100%",
                        position: "absolute",
                        top: "15%",
                        textAlign: "center",
                    }}>
                    <Typtext custom={{ marginBottom: "1%" }} variant={"h4"}>PRODUCTS</Typtext>
                    <Typtext custom={{ letterSpacing: "30%", wordSpacing: "20px" }} variant={"subtitle1"}>Thank   you   for   supporting   the   art</Typtext>

                    <DirectionStack gapspace={5} direct={"row"} sx={{
                          backgroundColor:"#ffffff85",
                         justifyContent:"center",
                           width:"fit-content" ,
                            margin:"0 auto" ,
                             padding:"2em 4em",
                             borderRadius:".5em",
                             marginTop:"4em"
                             
                             }}>

                        <Link to={'musics'}><BasicChips custom={{width:"10em",height:"3em", backgroundColor:"#00000084",color:"white"}} label="Musics"/></Link>
                        <Link to={'paints'}><BasicChips custom={{width:"10em",height:"3em", backgroundColor:"#00000084",color:"white"}} label="Paints"/></Link>
                        <Link to={'sculptures'}><BasicChips custom={{width:"10em",height:"3em", backgroundColor:"#00000084",color:"white"}} label="Sculptures"/></Link>
                        <Link to={'crafts'}><BasicChips custom={{width:"10em",height:"3em", backgroundColor:"#00000084",color:"white"}} label="Crafts"/></Link>
                        <Link to={'photos'}><BasicChips custom={{width:"10em",height:"3em", backgroundColor:"#00000084",color:"white"}} label="Photos"/></Link>

                    </DirectionStack>


                </BoxBasic>
            </SimpleContainer>




        </>

    )




}