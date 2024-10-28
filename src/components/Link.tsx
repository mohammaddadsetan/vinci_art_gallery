import Link from '@mui/material/Link';

type Linktyp={
underline:any,
color?:string,
children:any
custom:any


}


export default function Links({underline ,color="white", children , custom }:Linktyp){
    return(
        <Link href="#" underline={underline} color={color} sx={custom}>
        {children}
      </Link>
    )
}
