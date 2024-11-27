import Button from '@mui/material/Button';


type Lbutton={
variant:any,
children:any,
sx:any,
startIcon?:any,
endIcon?:any
}


// type myLbutton={


// }



export default function Linkedbutton({variant , children , sx , startIcon, endIcon}:Lbutton) {
  return (
    <Button variant={variant} sx={sx} startIcon={startIcon} endIcon={endIcon}>{children}</Button>
  )
}