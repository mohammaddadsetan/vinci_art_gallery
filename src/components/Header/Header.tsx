import logo from "../../img/logo.png";
// import arrowimg from "../../img/arrowimg.png";
import MenuItem from '@mui/material/MenuItem';
import BasicMenu from "../Menubutton";
import Linkedbutton from "../Linkedbutton";
import "./Header.css"
import BasicGrid from "../Grid";
import Grid from '@mui/material/Grid2';
import BoxBasic from "../Box";
import DirectionStack from "../Flexcontainer";
import SimpleContainer from "../Container";
export default function Header() {
  return (
    <header>
   <SimpleContainer typ={"section"}>
      <BoxBasic custom={{ width: "100%", height: "fit-content" ,boxSizing:" border-box", backgroundColor:"rgba(0, 0, 0, 0.34)" , padding:".5em 2em" ,position:" fixed" , zIndex:"10"}}>
        <BasicGrid gridGap={0}>
          <Grid size={4} sx={{ alignContent: "center" }}>
            <BoxBasic custom={{ width: "12em", height: "100%" }}><a href="./"><img className='WH100' src={logo} alt="" /></a></BoxBasic>
          </Grid>
          <Grid size={4} sx={{ alignContent: "center" }}>
            <DirectionStack direct={"row"} gapspace={0} sx={{ justifyContent: "space-around" }}>
              <BasicMenu value={"products"}>
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem>Logout</MenuItem>
              </BasicMenu>
              <Linkedbutton variant={"text"} sx={{ color: "white" }}>LOGIN</Linkedbutton>
              <BasicMenu value={"resorces"}>
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem>Logout</MenuItem>
                <MenuItem>Logout</MenuItem>
                <MenuItem>Logout</MenuItem>
                <MenuItem>Logout</MenuItem>
              </BasicMenu>
            </DirectionStack>
          </Grid>
          <Grid size={4} sx={{ alignContent: "center" }}>
            <DirectionStack direct={"row"} gapspace={3} sx={{ justifyContent: "flex-end" }}>
              <Linkedbutton variant={"text"} sx={{ color: "white", backgroundColor: "transparent" }}>LOGIN</Linkedbutton>
              <Linkedbutton variant={"contained"} sx={{ color: "black", backgroundColor: "white" }}>SHOP</Linkedbutton>
            </DirectionStack>
          </Grid>


        </BasicGrid>
      </BoxBasic>


      </SimpleContainer>
      </header>

  )


}