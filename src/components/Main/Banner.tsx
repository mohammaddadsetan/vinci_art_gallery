import bannerpic from '../../img/michelangelodavid.jpg'
import BoxBasic from "../Box"
import './Banner.css'
import SimpleContainer from '../Container'
import Typtext from '../Typography'
import DirectionStack from '../Flexcontainer'
import Linkedbutton from '../Linkedbutton'

export default function Banner() {
    return (
        <BoxBasic typ={"section"} custom={{ position: "relative", height: "100vh" }}>
            <img className='WH100 banner-img' src={bannerpic} alt="" />
            <SimpleContainer custom={{
                width: "100%",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                padding: "0 0 0 7em"

            }} >
                <DirectionStack gapspace={5} direct={"column"} sx={{ zIndex: "2", maxWidth: "30em", userSelect:"none" }}>
                    <Typtext variant={"h2"} typ={"h2"} custom={{ color: "white", fontSize: "4.5em", lineHeight: "90%" , fontWeight:"400" }}>A website makes it real</Typtext>
                    <DirectionStack gapspace={3} direct={"row"} sx={{ alignItems: "center" }} >
                        <Linkedbutton variant={"contained"} sx={{ color: "black", backgroundColor: "white", minWidth: "9em", height: "4.5em" }}>SHOP</Linkedbutton>
                        <Typtext variant={"h6"} typ={"p"} custom={{ color: "rgb(232,228,228)" }}>Get your free website trial today.No credit card required</Typtext>

                    </DirectionStack>
                </DirectionStack>
            </SimpleContainer>
        </BoxBasic>
    )


}