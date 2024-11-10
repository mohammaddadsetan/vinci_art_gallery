import * as React from 'react';
import Grid from '@mui/material/Grid2';

type gridbox = {

  gridGap: number,
  children: any
custom?:any
}


export default function BasicGrid({ gridGap, children,custom }: gridbox) {
  return (

    <Grid container spacing={gridGap} sx={custom}>



      {children}


    </Grid>

  );
}