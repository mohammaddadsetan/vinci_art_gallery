import bannerpic from '../../img/michelangelodavid.jpg'
import BoxBasic from "../Box"
import './Banner.css'
import SimpleContainer from '../Container'
import Typography from '../Typography'
import DirectionStack from '../Flexcontainer'
import Linkedbutton from '../Linkedbutton'
export default function Banner() {
    return (
        <BoxBasic typ={"section"} custom={{ position: "relative", height: "100vh" }}>
            <img className='WH100 banner-img' src={bannerpic} alt="" />
            <SimpleContainer>
                <DirectionStack gapspace={2} direct={"column"} sx={''}>
                    <Typography variant={}>A website makes it real</Typography>
                    <DirectionStack gapspace={3} direct={"row"} sx={""} >
                    <Linkedbutton variant={"text"} sx={{ color: "white" }}>LOGIN</Linkedbutton>
                        <Typography></Typography>

                    </DirectionStack>


                </DirectionStack>

            </SimpleContainer>




        </BoxBasic>
    )


}