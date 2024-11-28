import { Grid2, Paper } from "@mui/material"
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
import michel from '../../img/michelangelodavid4.png';
import michel2 from '../../img/michelangelodavid.jpg';
import michel3 from '../../img/michelangelodavid2.jpg';
import michel4 from '../../img/michelangelodavid3.jpg'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import Paperr from "../paper";
function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
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
        <Grid2 size={8} bgcolor={"hsl(0,0%,96%)"} sx={{ padding: "1em" }}>
          <BoxBasic custom={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2em" }}>
            <DirectionStack gapspace={0} direct={"row"} sx={{ justifyContent: "space-between", alignItems: "center", width: "100%" }}>
              <Linkedbutton variant={"text"} sx={{ color: "rgb(77,77,79)" }} startIcon={<ArrowBackIosNewIcon />}>back</Linkedbutton>
              {IconBreadcrumbs()}
            </DirectionStack>
            <DirectionStack gapspace={3} sx={{width:"37em"}} direct={"column"}>
              <Paperr shadow={24} custom={{ height: "25em", borderRadius: "4px", overflow: "hidden" }}>
                <img className="WH100" src={michel} alt="" />
              </Paperr>
              <DirectionStack gapspace={7} sx={{height:"4em"}} direct={"row"}>
                <Paperr shadow={24} custom={{borderRadius: "4px", overflow: "hidden"}}><img className="WH100" src={michel2} alt="" /></Paperr>
                <Paperr shadow={24}custom={{borderRadius: "4px", overflow: "hidden"}}><img className="WH100" src={michel3} alt="" /></Paperr>
                <Paperr shadow={24}custom={{borderRadius: "4px", overflow: "hidden"}}><img className="WH100" src={michel4} alt="" /></Paperr>
                <Paperr shadow={24}custom={{borderRadius: "4px", overflow: "hidden"}}><img className="WH100" src={michel4} alt="" /></Paperr>
              </DirectionStack>
            </DirectionStack>
          </BoxBasic>
        </Grid2>
        <Grid2 size={4}>
          <BoxBasic></BoxBasic>
        </Grid2>
      </BasicGrid>
    </>
  )
}