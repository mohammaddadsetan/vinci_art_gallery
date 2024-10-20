
import Container from '@mui/material/Container';

export default function SimpleContainer({ children}:any) {
  return (
   
      <Container disableGutters maxWidth={false}>
        {children}
      </Container>
    
  );
}