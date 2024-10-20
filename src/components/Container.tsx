
import Container from '@mui/material/Container';

export default function SimpleContainer({maxWidth , children}:any) {
  return (
   
      <Container fixed maxWidth={maxWidth} disableGutters>
        {children}
      </Container>
    
  );
}