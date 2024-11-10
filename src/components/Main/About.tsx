import BasicGrid from "../Grid"
import SimpleContainer from "../Container"
import BoxBasic from "../Box"
import Grid from "@mui/system/Grid"
import michel from '../../img/michelangelo.png'
export default function About() {
    return (
        <SimpleContainer typ={"section"} custom={{ padding: "5em 2em", backgroundColor: "rgb(232,228,228)" }}>
            <BoxBasic custom={{ width: "100%" }}>
                <BasicGrid gridGap={6}>
                    <Grid size={6}>
                        <BoxBasic>
                            <img className="WH100" style={{objectFit:"cover"}} src={michel} alt="" />
                        </BoxBasic>
                    </Grid>
                    <Grid size={6}>

                    </Grid>
                </BasicGrid>




            </BoxBasic>




        </SimpleContainer>


    )
}