// type typo={
//     children:any,
//     variant:string,
//     custom:any,
//    typ:any


// }



export default function Typography({children ,variant , typ , custom}:any){
    return(
<Typography variant={variant} component={typ} sx={custom}>
{children}
</Typography>

    )
}
