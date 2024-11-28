import Paper from '@mui/material/Paper';

type Paperr={
    children:any,
    shadow?:number,
    custom?:any
}
export default function Paperr({children , custom,shadow}:Paperr){

    return(
        <Paper elevation={shadow} sx={custom} >{children}</Paper>
    )
}