import * as React from 'react';
import Button from '@mui/material/Button'; import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Switch from '@mui/material/Switch';

import { blue } from '@mui/material/colors';
import { alpha, styled } from '@mui/material/styles';





export default function SimpleSnackbar() {
    const [open, setOpen] = React.useState(true);
    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const [checked, setChecked] = React.useState(true);



    // React.useEffect(() => {
    //     console.log(checked + "useeffect")
    // }, [checked])


    const BlueSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
            color: blue[300],
            '&:hover': {
                backgroundColor: alpha(blue[300], theme.palette.action.hoverOpacity),
            },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: blue[200],
        },
    }));




    const action = (
        <React.Fragment >
            <BlueSwitch checked={checked}
                onClick={() => setChecked(!checked)} sx={{ marginRight: ".5em" }} />
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <div>

            <Snackbar
                open={open}
                autoHideDuration={7000}
                onClose={handleClose}
                message="Dark Mode"
                action={action}
            />
        </div>
    );
}
