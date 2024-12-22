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
import { ProductTyp } from '../../api';
import { Link, useSearchParams } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SimpleContainer from '../Container';
import DirectionStack from '../Flexcontainer';
import { useState , useEffect} from 'react';
type productsprop = {
  products: ProductTyp[];
}


export default function MultiActionAreaCard({ products }: productsprop) {
  const [search] = useSearchParams();
  const filter = search.get("filter");
  const [test, settest] = useState<ProductTyp[]>([]);
useEffect(() => {

    if (filter === "LowestPrice") {
      settest(products.reverse())
    }
    else { settest(products) }


  }, [test])







  return (

    <>
      {test.map((Product, id) => (

        <Card sx={{ width: 270, minWidth: "200px" }} key={id}>
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
            <Button href={`/products/${Product.typ}/${Product.id}`} size='small' sx={{ backgroundColor: "gray", color: "white" }} variant='contained'>More</Button>
            <DirectionStack gapspace={1} sx={{ width: "1005" }} direct={"row"} >
              <IconButton color='warning'>
                <AddShoppingCartIcon />
              </IconButton>
              <IconButton color='warning'>
                <StarBorderOutlinedIcon />
              </IconButton>
            </DirectionStack>
          </CardActions>
        </Card>

      ))}
    </>
  );
}
