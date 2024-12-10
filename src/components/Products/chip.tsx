import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

type chip={
    label:string
    custom?:object
}


export default function BasicChips({label , custom}:chip) {
  return (
  <>
  <Chip clickable label={label} sx={custom} />
  </>
      

  );
}