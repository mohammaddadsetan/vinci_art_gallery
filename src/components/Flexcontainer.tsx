import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

type Flexcontainer={
    direct:any,
    children:any,
    gapspace:number
    }

export default function DirectionStack({children, gapspace, direct}:Flexcontainer) {
  return (
      <Stack direction={direct} spacing={gapspace}>
       {children}
       </Stack>
  );
}