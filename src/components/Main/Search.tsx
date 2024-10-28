import SimpleContainer from "../Container"
import BoxBasic from "../Box"
import BasicGrid from "../Grid"
import Grid from "@mui/system/Grid"
import Typtext from "../Typography"
import Inputbox from "../Inputbox"
import SearchIcon from '@mui/icons-material/Search';
import DirectionStack from "../Flexcontainer"
import Linkedbutton from "../Linkedbutton"
import Links from "../Link"
export default function Search() {
    return (
        <SimpleContainer typ={"section"} custom={{ padding: "5em 2em", backgroundColor: 'rgb(237,237,237)' }}>
            <BoxBasic custom={{ width: "100%" }}>
                <BasicGrid gridGap={0}>

                    <Grid size={6}>
                        <BoxBasic custom={{ maxWidth: "70%" }}>
                            <Typtext variant={"h4"} typ={"p"} custom={{ lineHeight: "1em" }}>Find a domain name for your website</Typtext>
                        </BoxBasic>
                    </Grid>
                    <Grid size={6}>
                        <BoxBasic>
                            <DirectionStack sx={""} gapspace={4} direct={"column"}>
                                <DirectionStack gapspace={3} sx={""} direct={"row"}>
                                    <Inputbox custom={{ backgroundColor: "white" }} color={"black"} id={"outlined-search"} typ={"search"} variant={"outlined"} icon={<SearchIcon />} placeholder={"search your product"} />
                                    <Linkedbutton variant={"contained"} sx={{ color: "white", backgroundColor: "black", width: "10em" }}>SEARCH</Linkedbutton>
                                </DirectionStack>
                                <Links underline={"always"}>Learn more about Domains</Links>
                            </DirectionStack>
                        </BoxBasic>
                    </Grid>

                </BasicGrid>


            </BoxBasic>


        </SimpleContainer>






    )
}