import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

import Product from '../Product/Product';



const Card = () => {
               const [products ,setProducts] =useState([])
               useEffect(()=>{
                              fetch('https://mighty-bayou-30791.herokuapp.com/foods')  
                              .then(res=>res.json())   
                              .then(data=>setProducts(data))  
                      },[])
               return (
                              <Box sx={{ flexGrow: 1 }}>
            <Container>
                
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                OUR PRODUCTS
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Grid>
            </Container>
        </Box>
               );
};

export default Card;