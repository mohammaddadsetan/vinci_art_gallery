
import Box from '@mui/material/Box';

export default function BoxBasic({children , custom}:any) {
  return (
    <Box sx={custom}>
      
    {children}
    </Box>
  );
}