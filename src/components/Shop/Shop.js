import { Button, Card, CardActionArea, CardActions, CardContent, Grid, Typography } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router';
import "./Shop.css"

const Shop = (props) => {
  const history = useHistory()
  const hendelBuyProduct = (id) => {

    const url = `CheckOut/${id}`;
    history.push(url);

  }

  const { name, price, img, _id, wight } = props.product;

  return (
    <Grid item xs={8} sm={6} md={3}>
      <Card className="card-conatiner">
        <CardActionArea>
          <img className="Card-img" src={img} alt="" srcset="" />
          <CardContent>
            <Typography gutterBottom variant="p" component="p">
              {name}
            </Typography>

            <Typography variant="body2" color="textPrimary" component="p">
              ${price} <spn className="brackPoint">wight: {wight} </spn>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="add-cut-btn-container">
          <Button size="small" color="primary">
            View Details
          </Button>
          <Button onClick={() => hendelBuyProduct(_id)} variant="contained" color="primary" className="add-cut-btn" size="small">
            <ShoppingCartOutlined /> Buy Now
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Shop;