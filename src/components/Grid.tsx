import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

type gridbox={
    gridGrow:any,
    children:any,
    gridGap:number,

    }


export default function BasicGrid({gridGrow , gridGap , children,}:gridbox) {
  return (
    <Box sx={{ flexGrow: gridGrow}}>
      <Grid container spacing={gridGap}>



{children}


       </Grid>
    </Box>
  );
}