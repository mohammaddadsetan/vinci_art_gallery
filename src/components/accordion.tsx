import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { title } from 'process';
import Typtext from './Typography';

type accordion={
title1:any,
sub1:string,
title2:any,
sub2:string,
title3:any,
sub3:string,
}



export default function AccordionUsage({title1,title2,title3,sub1,sub2,sub3 }:accordion) {
  return (
    <div>
      <Accordion sx={{backgroundColor:"hsl(0,0%,97%)"}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typtext variant={"button"}>{title1}</Typtext>
        </AccordionSummary>
        <AccordionDetails>
          <Typtext variant={"body2"}>{sub1}</Typtext>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor:"hsl(0,0%,97%)"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
       
        <Typtext variant={"button"}>{title2}</Typtext>
        </AccordionSummary>
        <AccordionDetails>
        <Typtext variant={"body2"}>{sub2}</Typtext>
         </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor:"hsl(0,0%,97%)"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
         
         <Typtext variant={"button"}>{title3}</Typtext>
        </AccordionSummary>
        <AccordionDetails>
        <Typtext variant={"body2"}>{sub3}</Typtext>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}