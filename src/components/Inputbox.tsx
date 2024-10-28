import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
export default function Inputbox({label, typ,variant , placeholder , icon , id}:any){
    return(

        <TextField
        id={id}
        label={label}
        placeholder={placeholder}
        type={typ}
        variant={variant}
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