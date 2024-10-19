import logo from "../../img/logo.png";
// import arrowimg from "../../img/arrowimg.png";
import MenuItem from '@mui/material/MenuItem';
import BasicMenu from "../Menubutton";
import Linkedbutton from "../Linkedbutton";
import "./Header.css"
import BasicGrid from "../Grid";
import Grid from '@mui/material/Grid2';
export default function Header() {
  return (
    <header>
      <BasicGrid gridGap={0} gridGrow={1}>
        <Grid size={4}>
          <div className='header-logo'><a href="./"><img className='WH100' src={logo} alt="" /></a></div>
        </Grid>
        <Grid size={4}>
          <div className='header-options'>
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
          </div>
        </Grid>
        <Grid size={4}>
          <div className='header-login'>
            {/* <Secondarybutton background={'transparent'} width={'8em'} height={''}><a href="./">LOGIN</a></Secondarybutton> */}
            <Linkedbutton variant={"text"} sx={{ color: "white", backgroundColor: "transparent" }}>LOGIN</Linkedbutton>
            <Linkedbutton variant={"contained"} sx={{ color: "black", backgroundColor: "white" }}>SHOP</Linkedbutton>
          </div>
        </Grid>


      </BasicGrid>



    </header>


  )


}