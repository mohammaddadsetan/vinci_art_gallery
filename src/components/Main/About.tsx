import BasicGrid from "../Grid"
import SimpleContainer from "../Container"
import BoxBasic from "../Box"
import Grid from "@mui/system/Grid"
export default function About() {
    return (
        <SimpleContainer typ={"section"} custom={{ padding: "5em 2em", backgroundColor: "rgb(232,228,228)"}}>
            <BoxBasic custom={{ width: "100%" }}>
                <BasicGrid gridGap={0}>
                    <Grid size={6}>

                    </Grid>
                    <Grid size={6}>

                    </Grid>
                </BasicGrid>




            </BoxBasic>




        </SimpleContainer>


    )
}