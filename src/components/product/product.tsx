import { Grid2 } from "@mui/material"
import BasicGrid from "../Grid"
import BoxBasic from "../Box"
import DirectionStack from "../Flexcontainer"




import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import Linkedbutton from "../Linkedbutton";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const IconBreadcrumbs = () => {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Products
        </Link>
        <Typography
          sx={{ color: 'text.primary', display: 'flex', alignItems: 'center' }}
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Paints
        </Typography>
      </Breadcrumbs>
    </div>
  )
}


export default function Product() {
  return (
    <>
      <BasicGrid gridGap={0}>
        <Grid2 size={9} bgcolor={"hsl(0,0%,96%)"}>
          <BoxBasic>
            <DirectionStack gapspace={0} direct={"row"} sx={{justifyContent:"space-between" , alignItems:"center"}}>
              <Linkedbutton variant={"text"} sx={{color:"rgb(77,77,79)"}} startIcon={<ArrowBackIosNewIcon/>}>back</Linkedbutton>
              {IconBreadcrumbs()}
            </DirectionStack>
            <BoxBasic></BoxBasic>
          </BoxBasic>
        </Grid2>
        <Grid2 size={3}>
          <BoxBasic></BoxBasic>
        </Grid2>
      </BasicGrid>
    </>
  )
}