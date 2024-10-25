
import Box from '@mui/material/Box';

export default function BoxBasic({children , custom , typ}:any) {
  return (
    <Box component={typ} sx={custom}>
      
    {children}
    </Box>
  );
}