import React from 'react'
import './Product.css'
import Button from '@material-ui/core/Button'

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 300,
    },
    media: {
      height: 300,
    }, 
  });
  
  function Product({id,price,rating,image}) {
    const classes = useStyles()
    return (
        <Card className="Product">
          <CardActionArea>
            <CardMedia square
              imageUrl={ image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" color="textPrimary">
                {id}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" width="80px">
                  ${price}
              </Typography>
              
            </CardContent>
          </CardActionArea>

          <CardActions>
          <Box component="fieldset" mb={6} borderColor="transparent">
        <Rating name="read-only" value={rating} readOnly />
        </Box>
          </CardActions>
          
          <Button size="small" color="primary">
              Add to cart
            </Button>

        </Card>
      );
  }
  export default Product