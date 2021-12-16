import React from 'react';
import './Home.css'
import Banner from '../Pages/Banner/Banner';
import img from '../img1.PNG'
const Home = () => {
               return (
                              <div>
<img className="img1" src={img} alt="" />
                                   <Banner></Banner>         
                              </div>
               );
};

export default Home;