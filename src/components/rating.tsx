
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

type Rate={

Rate:number
}

export default function HalfRating({Rate}:Rate) {
    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
          color: '#ff6d75',
        },
        '& .MuiRating-iconHover': {
          color: '#ff3d47',
        },
      });
  return (


    <StyledRating
    name="customized-color"
    defaultValue={Rate}
    readOnly
    precision={0.1}
    icon={<FavoriteIcon fontSize="inherit" />}
    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
  />

  );
}