import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
export default function Inputbox({label, typ,variant , placeholder , icon , id , custom , color}:any){
    return(

        <TextField
        fullWidth
        id={id}
        label={label}
        placeholder={placeholder}
        type={typ}
        variant={variant}
        sx={custom}
        color={color}
        slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  {icon}
                </InputAdornment>
              ),
            },
          }}
      />


    )
}