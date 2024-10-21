import * as React from 'react';
import Grid from '@mui/material/Grid2';

type gridbox = {

  gridGap: number,
  children: any

}


export default function BasicGrid({ gridGap, children, }: gridbox) {
  return (

    <Grid container spacing={gridGap}>



      {children}


    </Grid>

  );
}