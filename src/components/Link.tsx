import Link from '@mui/material/Link';

type Linktyp={
underline:any,
color?:any,
children:any
custom?:any
variant?:any

}


export default function Links({underline ,color="inherit", children , custom, variant="body1" }:Linktyp){
    return(
        <Link href="#" underline={underline} color={color} sx={custom} variant={variant}>
        {children}
      </Link>
    )
}
