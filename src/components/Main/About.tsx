import BasicGrid from "../Grid"
import SimpleContainer from "../Container"
import BoxBasic from "../Box"
import Grid from "@mui/system/Grid"
import michel from '../../img/michelangelo.png'
import DirectionStack from "../Flexcontainer"
import Typtext from "../Typography"
export default function About() {
    return (
        <SimpleContainer typ={"section"} custom={{ padding: "5em 2em", backgroundColor: "rgb(232,228,228)" }}>
            <BoxBasic custom={{ width: "100%" }}>
                <BasicGrid gridGap={6}>
                    <Grid size={6}>
                        <BoxBasic>
                            <img className="WH100" style={{ objectFit: "cover" }} src={michel} alt="" />
                        </BoxBasic>
                    </Grid>
                    <Grid size={6}>
                        <DirectionStack direct={"column"} sx={""} gapspace={5}>
                            <DirectionStack direct={"column"} sx={""} gapspace={3}>
                                <Typtext variant={"h5"} typ={"h2"} custom={{fontWeight:"500"}}>Create a website</Typtext>
                                <Typtext variant={"body1"} typ={"p"}>Choose from any of our industry-leading website templates, designer fonts, and color palettes.</Typtext>

                            </DirectionStack>
                            <DirectionStack direct={"column"} sx={""} gapspace={3}><Typtext variant={"h5"} typ={"h2"} custom={{fontWeight:"500"}}>Sell your products and offerings</Typtext>
                                <Typtext variant={"body1"} typ={"p"}>Set up an online store, book appointments, invoice clients, and sell your skills—all on a single platform built just for you.</Typtext></DirectionStack>
                            <DirectionStack direct={"column"} sx={""} gapspace={3}><Typtext variant={"h5"} typ={"h2"} custom={{fontWeight:"500"}}>Market your business</Typtext>
                                <Typtext variant={"body1"} typ={"p"}>On-brand email campaigns and social tools make it easy to retain customers and grow your base.</Typtext></DirectionStack>
                        </DirectionStack>
                    </Grid>
                </BasicGrid>




            </BoxBasic>




        </SimpleContainer>


    )
}