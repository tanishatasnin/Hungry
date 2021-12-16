import React from 'react';
import './Navber.css'
import { Link } from 'react-router-dom';
import useAuth from '../Login/Login/Firebase/Context/useAuth';

const Navber = () => {
  const{user,logout}=useAuth();
  console.log(user);
               return (
                              <div>
                                      <header >
<div class="">
<div class="logo-box ">
{/* <h1 className="my-logo" >Essential oil's</h1> */}

</div>
<nav>
<ul>
<li><Link to="/home">Home</Link></li>

<li><Link to="/login">login</Link></li> 
<li><Link to="/register">Sign Up</Link></li> 
{/* ______ button for log out ____  */}
<span className="logout-name">{user.displayName}</span>
<span className="logout-img"><img className="logout-img" src={user.photoURL} alt="" /></span>

{user?.email &&  <button className="log-out" onClick={logout}>Log out</button>}

 




</ul>
{/* <!-- _______________ input feild ________  --> */}
<div class="search-field"><div class="search-box">
  <input class="input-box"  type="text" name="" placeholder="search"/>
  <a class="button" href="">
    <button class="button loadProducts()"><i class="button-icon fas fa-search"></i></button>
                 
  </a>
</div>
</div>
{/* <!-- _____ input field part close ____  --> */}
</nav>
</div>
</header>       
                              </div>
               );
};

export default Navber;