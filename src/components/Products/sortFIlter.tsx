import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('Newest');

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  return (
    <ToggleButtonGroup
      color="standard"
      value={alignment}
      exclusive
      size='small'
      onChange={handleAlignment}
      aria-label="Platform"
      fullWidth
      sx={{width:"74.3%" , border:"solid black 1px"}}

    >
      <ToggleButton value="Newest">Newest</ToggleButton>
      <ToggleButton  value="Lowest price">Lowest price</ToggleButton>
      <ToggleButton value="Highest price">Highest price</ToggleButton>
      <ToggleButton value="Best Seller">Best seller</ToggleButton>
      <ToggleButton value="Most viewed">Most viewed</ToggleButton>
    </ToggleButtonGroup>
  );
}