import Button from '@mui/material/Button';


type Lbutton={
variant:any,
children:any,
sx:any
}


// type myLbutton={


// }



export default function Linkedbutton({variant , children , sx}:Lbutton) {
  return (
    <Button variant={variant} sx={sx}>{children}</Button>
  )
}