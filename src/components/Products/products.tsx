
import BoxBasic from "../Box"
import BasicGrid from "../Grid"
import { Grid2 } from "@mui/material"
import Typtext from "../Typography"
export default function Products() {
    return (
        <BoxBasic typ={"section"} custom={{padding:"7em 2em"}}>
            <BoxBasic>
                <BasicGrid gridGap={0}>
                    <Grid2 size={6} sx={{alignItems:"center" , display:"flex"}}><BoxBasic><Typtext variant={"h2"} typ={'h1'} custom={{maxWidth:"90%", fontSize:"3.2em"}}>Make any template yours with ease.</Typtext></BoxBasic></Grid2>
                    <Grid2 size={6} sx={{alignItems:"center" , display:"flex"}}><BoxBasic><Typtext variant={"body1"} custom={{maxWidth:"90%",}}>Whether you need a portfolio website, an online store, or a personal blog, you can use Squarespace's customizable and responsive website templates to get started.</Typtext></BoxBasic></Grid2>
                </BasicGrid>
            </BoxBasic>






        </BoxBasic>
    )
}