import React from 'react';
import './Product.css'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';
const Product = ({product}) => {
               const { Name,img ,_id} = product;
               return (
                              <Grid item xs={4} sm={4} md={4}>
                              <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                                  {/* <CardMedia
                                      component="img"
                                      style={{ width: '200px', height: '180px', margin: '0 auto', borderRadius: '50%' }}
                                      image={img}
                                      alt="green iguana"
                                  /> */}
                                  <CardContent>
                                      <Typography variant="h5" component="div">
                                          {Name}
                                      </Typography>
                                      
                                      <br />
                                        <NavLink to={`/booking/${_id}`}>
                                            <button className='img-card' style={{ width: '200px', height: '200px', borderRadius: '50%' }}>
                                                <img className='img-card' style={{ width: '200px', height: '200px', borderRadius: '50%'  }} src={img} alt="" /></button>
                                        {/* <Button variant='contained'>Buy Now </Button> */}
                  
                </NavLink>
                                      
                                  </CardContent>
                                 
                              </Card>

                          </Grid>
               );
};

export default Product;