import React, { useState, useEffect } from "react";
import { Stack, Typography, Slider, TextField, Divider } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
export default function App() {
  const minmin = 0;
  const maxmax = 1000000;
  const [priceRangeValue, setPriceRangeValue] = useState([100000, 900000]);

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRangeValue(newValue);
  };

  console.log(priceRangeValue);

  function minrange() {
    if (priceRangeValue[0] < 0) {
      priceRangeValue[0] = 0
    }
    else {
      return (e) => { setPriceRangeValue([Number(e.target.value), priceRangeValue[1]]) };
    }
  }

  function maxrange() {
    if (priceRangeValue[1] == 1000000) {
      priceRangeValue[1] ="+" + 1000000 
    }
    else {
      return (e) => { setPriceRangeValue([priceRangeValue[0], Number(e.target.value)]) };
    }
  }


  return (
    <>
      <Stack direction="column" spacing={3} justifyContent="space-between" alignItems={"center"} sx={{padding:" 2em 0 3em 0"}} >
        <Slider
        
          getAriaLabel={() => "Price range"}
          value={priceRangeValue}
          onChange={handlePriceRangeChange}
          color="warning"
          sx={{ width:"90%"}}
          min={minmin}
          max={maxmax}
        />
        <Stack direction="column" justifyContent="space-between" alignItems="center">
          <TextField
            label="min"
            size="small"
            variant="outlined"
            slotProps={{
              input: {
                endAdornment: <InputAdornment position="end">$</InputAdornment>,
              },
            }}
            InputLabelProps={{ shrink: true }}
            // sx={{ width: "90px" }}
            fullWidth
            value={priceRangeValue[0]}
            onChange={minrange()}
          />
          <Typography>-</Typography>
          <TextField
            label="max"
            fullWidth
            size="small"
            variant="outlined"
            slotProps={{
              input: {
                endAdornment: <InputAdornment position="end">$</InputAdornment>,
              },
            }}
            InputLabelProps={{ shrink: true }}
            // sx={{ width: "90px" }}
            value={priceRangeValue[1]}
            onChange={maxrange()}
          />
        </Stack>
      </Stack>
    
    </>
  );
}