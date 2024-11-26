import DirectionStack from "../Flexcontainer"
import BoxBasic from "../Box"
import BasicGrid from "../Grid"
import { Grid2 } from "@mui/material"
import Typtext from "../Typography"
import MultiActionAreaCard from "./cards"
import Inputbox from "../Inputbox"
import SearchIcon from '@mui/icons-material/Search';
import InteractiveList from "./listfilter"
import ColorToggleButton from "./sortFIlter"
import RangeSlider from "./priceSlider"
export default function Products() {
    return (
        <BoxBasic typ={"section"} custom={{ padding: "0 2em" }}>
            <BoxBasic custom={{ padding: "3em 0" }}>
                <BasicGrid gridGap={0}>
                    <Grid2 size={6} sx={{ alignItems: "center", display: "flex" }}><BoxBasic><Typtext variant={"h2"} typ={'h1'} custom={{ maxWidth: "90%", fontSize: "3.2em" }}>Make any template yours with ease.</Typtext></BoxBasic></Grid2>
                    <Grid2 size={6} sx={{ alignItems: "center", display: "flex" }}><BoxBasic><Typtext variant={"body1"} custom={{ maxWidth: "90%", }}>Whether you need a portfolio website, an online store, or a personal blog, you can use Squarespace's customizable and responsive website templates to get started.</Typtext></BoxBasic></Grid2>
                </BasicGrid>
            </BoxBasic>
            <DirectionStack gapspace={0} direct={"row"} sx={{ alignItems: "center", justifyContent: "space-between", marginBottom: "1em" }}>
                <Typtext>29 result</Typtext>
                <ColorToggleButton />
            </DirectionStack>
            <BasicGrid gridGap={4}>
                <Grid2 size={3} sx={{ position: "sticky",top:"0", overflow: "scroll", padding: "1em" , height:"30em", borderTop:"1px solid black" , borderBottom:"1px solid black"}}>

                    <Inputbox placeholder={"Search..."} typ={"search"} color={"black"} icon={<SearchIcon />} />
                    <InteractiveList />
                    




                </Grid2>
                <Grid2 size={9}>
                    <BasicGrid gridGap={3}>
                        <Grid2 size={4} rowGap={7} container>
                            <MultiActionAreaCard />
                            <MultiActionAreaCard />
                            <MultiActionAreaCard />
                            <MultiActionAreaCard />


                        </Grid2>
                        <Grid2 size={4} rowGap={7} container>
                            <MultiActionAreaCard />
                            <MultiActionAreaCard />
                            <MultiActionAreaCard />
                            <MultiActionAreaCard />

                        </Grid2>
                        <Grid2 size={4} rowGap={7} container>
                            <MultiActionAreaCard />
                            <MultiActionAreaCard />
                            <MultiActionAreaCard />
                            <MultiActionAreaCard />

                        </Grid2>

                    </BasicGrid>
                </Grid2>


            </BasicGrid>




        </BoxBasic>
    )
}