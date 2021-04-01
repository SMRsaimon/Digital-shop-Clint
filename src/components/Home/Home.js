import { Grid } from '@material-ui/core';

import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import Shop from '../Shop/Shop';

import "./Home.css"

const Home = () => {
  const [products, setProduct] = useState([])



  useEffect(() => {

    fetch("http://localhost:5000/home")
      .then(res => res.json())
      .then(data => {
        setProduct(data)

      })
      .catch(err => {

        console.log(err)

      })

  }, []);

  return (
    <div className="HomeContainer">
      <Grid container spacing={4}
        justify="center" direction="row" >
        {

          products.length === 0 ? <div className="spinner-home-page"><Loader
            type="Circles"
            color="#00BFFF"
            height={100}
            width={100}


          /> </div> :
            products.map((pd) => <Shop key={pd._id} product={pd}></Shop>)

        }
      </Grid>
    </div>
  );
};

export default Home;