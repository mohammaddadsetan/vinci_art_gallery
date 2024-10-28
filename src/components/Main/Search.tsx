import SimpleContainer from "../Container"
import BoxBasic from "../Box"
import BasicGrid from "../Grid"
import Grid from "@mui/system/Grid"
import Typtext from "../Typography"
import Inputbox from "../Inputbox"
import SearchIcon from '@mui/icons-material/Search';
export default function Search() {
    return (
        <SimpleContainer typ={"section"} custom={{ padding: "4em 2em", backgroundColor: 'rgb(237,237,237)' }}>
            <BoxBasic custom={{ width: "100%" }}>
                <BasicGrid gridGap={0}>

                    <Grid size={6}>
                        <BoxBasic custom={{ maxWidth: "70%" }}>
                            <Typtext variant={"h4"} typ={"p"} custom={{ lineHeight: "1em" }}>Find a domain name for your website</Typtext>
                        </BoxBasic>
                    </Grid>
                    <Grid size={6}>
                        <BoxBasic>
                            <Inputbox typ={"search"} variant={"outlined"} icon={<SearchIcon/>} placeholder={"search your product"} />
                        </BoxBasic>
                    </Grid>

                </BasicGrid>


            </BoxBasic>


        </SimpleContainer>






    )
}