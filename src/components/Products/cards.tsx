import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import micheal from '../../img/michelangelodavid4.png';
import { IconButton } from '@mui/material';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { Product } from '../../api';
import { Link } from 'react-router-dom';

type productsprop = {
  products: Product[];
}


export default function MultiActionAreaCard({ products }: productsprop) {
  return (

    <>
      {products.map((Product, id) => (
        <Link to={`/products/${Product.typ}/${id}`}>
          <Card sx={{ width: 270 }} key={id}>
            <CardActionArea>
              <CardMedia

                component="img"
                height="170"
                image={Product.img}

                alt="green iguana"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {Product.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {Product.typ}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: "space-between" }}>
              <Button sx={{ backgroundColor: "black", color: "white" }} variant='contained'>Shop</Button>
              <IconButton color='warning'>
                <StarBorderOutlinedIcon />

              </IconButton>
            </CardActions>
          </Card>
        </Link>
      ))}
    </>
  );
}
