
import Container from '@mui/material/Container';

export default function SimpleContainer({ children , typ}:any) {
  return (
   
      <Container disableGutters maxWidth={false} component={typ}>
        {children}
      </Container>
    
  );
}