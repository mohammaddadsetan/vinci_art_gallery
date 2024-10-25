
import Container from '@mui/material/Container';

export default function SimpleContainer({ children , typ , custom}:any) {
  return (
   
      <Container sx={custom} disableGutters maxWidth={false} component={typ}>
        {children}
      </Container>
    
  );
}