


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Buy from "./Buy";



const Food = () => {
 const { productId } = useParams();
    const [product,setProduct] = useState({})

    useEffect(()=>{
               fetch(`http://localhost:5000/foods/${productId}`)
               .then(res=>res.json())
               .then(data=> setProduct(data))
           },[])
               return (
                              <div class="container">
                <div class="row">
                  <div class="col-sm-6">
                  

<h3> <span className='The-Journal'>{product.Name}</span></h3>
 <img style={{ width: '200px', height: '180px', margin: '0 auto' }} src={product.img} alt="" />   
 {/* <h6>{food.useFor}</h6>   */}
 </div>
                  <div class="col-sm-6">
                      <Buy></Buy>
                      
                  </div>
                </div>
                          </div>   
               );
};

export default Food;