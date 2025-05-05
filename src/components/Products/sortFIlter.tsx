import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useEffect, useState } from 'react';



const query = new URLSearchParams({ filter: "LowestPrice" });



export default function ColorToggleButton() {
  const [alignment, setAlignment] = useState<any>("Newest");
  const [changeButton, setChangeButton] = useState<string>();
  useEffect(() => {

    if (changeButton!=alignment) {
      setAlignment(changeButton)
    }


  }, [changeButton])

 


  return (
    <ToggleButtonGroup
      color="standard"
      value={alignment}
      exclusive
      size='small'
      onChange={(e: any) => setChangeButton(e.target.value)}
      aria-label="Platform"
      fullWidth
      sx={{ width: "60%", border: "solid black 1px" }}

    >
      <ToggleButton value="Newest">Newest</ToggleButton>
      <ToggleButton value="LowestPrice" href={`?${query.toString()}`}>Lowest price</ToggleButton>
      <ToggleButton value="Highest price">Highest price</ToggleButton>
      <ToggleButton value="Best Seller">Best seller</ToggleButton>
      <ToggleButton value="Most viewed">Most viewed</ToggleButton>
    </ToggleButtonGroup>
  );
}