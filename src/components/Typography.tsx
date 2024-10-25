// type typo={
//     children:any,
//     variant:string,
//     custom:any,
//    typ:any


// }
import Typography from '@mui/material/Typography';


export default function Typtext({children ,variant , typ , custom}:any){
    return(
<Typography variant={variant} component={typ} sx={custom}>
{children}
</Typography>

    )
}
