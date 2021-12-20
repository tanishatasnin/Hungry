import React from 'react';
import './Home.css'
import Banner from '../Pages/Banner/Banner';
import img from '../img1.PNG'
import Pro from '../Pages/Products/Pro';
import Card from '../Pages/Product/Card'
import Objects from '../Pages/Objects/Objects';
import Fotter from '../Pages/Fotter/Fotter';
import Buy from './Buy/Buy';
const Home = () => {
               return (
                              <div>
<img className="img1" src={img} alt="" />
                                   <Banner></Banner>   
                                   
                                   <Card></Card> 
                                   <Fotter></Fotter>
                                   
                                   
                              </div>
               );
};

export default Home;