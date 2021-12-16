import React from 'react';
import './Products.css'

const Products = () => {
               return (
                              <div>
                              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
                   <div className='d-flex slider-img-all '>
                   <img  className="slider-img" src="https://lh3.googleusercontent.com/ZnlaJpPeXRhaQPN5yLJwjIJd8oCGzJQJhkX7wvLDhYWTgOypYkP1spOdqccaVQgMfVxUHledh5I9wL_tytO_KA=s640-c-rw-v1-e365" class="d-block w-100" alt="..."/>
      <img  className="slider-img" 
      src="https://lh3.googleusercontent.com/AgmI1XBLIP2mU6_94JLDQ5OaBxRdcBZZzfaISOo34NTev8TmZi9p219NZ40-UIx8nHihvi6cBnSPAsLsIHMi=s640-c-rw-v1-e365" class="d-block w-100" alt="..."/>
      
      <img  className="slider-img" 
      src="https://lh3.googleusercontent.com/ZnlaJpPeXRhaQPN5yLJwjIJd8oCGzJQJhkX7wvLDhYWTgOypYkP1spOdqccaVQgMfVxUHledh5I9wL_tytO_KA=s640-c-rw-v1-e365" class="d-block w-100" alt="..."/>
      
      <img  className="slider-img" 
      src="https://lh3.googleusercontent.com/ZnlaJpPeXRhaQPN5yLJwjIJd8oCGzJQJhkX7wvLDhYWTgOypYkP1spOdqccaVQgMfVxUHledh5I9wL_tytO_KA=s640-c-rw-v1-e365" class="d-block w-100" alt="..."/>
      
      <img  className="slider-img" 
      src="https://lh3.googleusercontent.com/ZnlaJpPeXRhaQPN5yLJwjIJd8oCGzJQJhkX7wvLDhYWTgOypYkP1spOdqccaVQgMfVxUHledh5I9wL_tytO_KA=s640-c-rw-v1-e365" class="d-block w-100" alt="..."/>
      
      
                   </div>
   
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img  className="slider-img" 
      src="https://lh3.googleusercontent.com/ZnlaJpPeXRhaQPN5yLJwjIJd8oCGzJQJhkX7wvLDhYWTgOypYkP1spOdqccaVQgMfVxUHledh5I9wL_tytO_KA=s640-c-rw-v1-e365" class="d-block w-100" alt="..."/>
      
      
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img className="slider-img" src="https://lh3.googleusercontent.com/gKi5pJTWN1U1fCZl4oETs90uWiq-_-ycIzoFdJSrPk3dtKO6q0--jRxspixQdws3Gim_d1y7Kz1we14e55rsSQ=s640-c-rw-v1-e365" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>              
                              </div>
               );
};

export default Products;