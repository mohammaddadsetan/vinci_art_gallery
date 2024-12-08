import { Divider, Grid2 } from "@mui/material"
import BasicGrid from "../Grid"
import BoxBasic from "../Box"
import DirectionStack from "../Flexcontainer"
import ProductSlider from "./productSlider"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import Linkedbutton from "../Linkedbutton";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { fetchProduct } from "../../api"
import Typtext from "../Typography"
import HalfRating from "../rating"
import Links from "../Link"
import AccordionUsage from "../accordion"
import { ProductTyp } from "../../api"
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


type ProductData={
  productt:ProductTyp
}

export default function Product({productt}:ProductData) {
  // React.useEffect(() => {
  //   fetchProduct(5).then((Product) => {
  //     console.log(Product)
  //   })



  // })

  return (
    <>
      <BasicGrid gridGap={0}>
        <Grid2 size={8} bgcolor={"hsl(0,0%,96%)"} sx={{ padding: "1em" }}>
          <BoxBasic custom={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <DirectionStack gapspace={0} direct={"row"} sx={{ justifyContent: "space-between", alignItems: "center", width: "100%" }}>
              <Linkedbutton variant={"text"} sx={{ color: "rgb(77,77,79)" }} startIcon={<ArrowBackIosNewIcon />}>back</Linkedbutton>
              {IconBreadcrumbs()}
            </DirectionStack>
            <ProductSlider />
            
          </BoxBasic>
        </Grid2>
        <Grid2 size={4} padding={"3em"}>
          <BoxBasic custom={{ position: "sticky", top: "0", overflow: "scroll" }}>
            <DirectionStack gapspace={2.8} direct={"column"} sx={""}>

              <Typtext variant={"h4"} typ={"h1"} custom={{ fontWeight: "500", lineHeight: "1" }}>{productt.title}</Typtext>
              <Links underline={"none"}>              <Typtext variant={"subtitle1"} typ={"h1"} custom={{ fontWeight: "300", lineHeight: "1" }}>(painter name)</Typtext>
              </Links>
              <Typtext variant={"body1"} typ={"p"}>"These details are clearly and carefully curated by stylists and reviewers. They don't just explain what a dress is made of and how it looks — they cover how it fits on every part of the body, which undergarments should be worn with it, and for which body types it's best suited.</Typtext>

              <Linkedbutton variant={"contained"} sx={{ backgroundColor: "black" }}>SHOP</Linkedbutton>
              <Typtext variant={"body2"} typ={"p"}>500 views</Typtext>
              <HalfRating Rate={4.5} />

              <Divider />
            </DirectionStack>
            <AccordionUsage title1={"Details"} title2={"Materials"} title3={"descriptions"} sub1="curated by stylists and reviewers. They don't just explain what a dress is made of and how it looks — they cover how it fits on every part of the body, which undergarments should be"
              sub2="curated by stylists and reviewers. They don't just explain what a dress is made of and how it looks — they cover how it fits on every part of the body, which undergarments should be"
              sub3="curated by stylists and reviewers. They don't just explain what a dress is made of and how it looks — they cover how it fits on every part of the body, which undergarments should be" />
          </BoxBasic>
        </Grid2>
      </BasicGrid>
    </>
  )
}