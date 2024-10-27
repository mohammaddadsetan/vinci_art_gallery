import * as React from 'react';
import Stack from '@mui/material/Stack';

type Flexcontainer={
    direct:any,
    children:any,
    gapspace:number,
    sx:any
    }

export default function DirectionStack({children, gapspace, direct , sx}:Flexcontainer) {
  return (
      <Stack direction={direct} spacing={gapspace} sx={sx}>
       {children}
       </Stack>
  );
}