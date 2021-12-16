import React from 'react';
import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import  { useState } from 'react';
import './Login.css';
import { Grid } from '@mui/material';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from './Firebase/Context/useAuth';


const Login = () => {
               const [loginData, setLoginData] = useState({});
    const { user, loginUser,signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useNavigate();

                //    +++++++++++ handelonBlur+++++++++ 


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
            // _______________ ++++ submit ++++++++ 


    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
        // ____________  +++++++++++++ google sign in +++++++++ 


    const handelGoogleSignIn = e =>{
               signInWithGoogle(location, history)
              }


//   +++++++++++++++++ return ++++++++++ 

               return (
                              <div className='login'>
        <Container>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                    <img src="https://lh3.googleusercontent.com/proxy/f0KrOVKBok_uzap4xRV_vKOdQPAOOimOKSC940VnrH7HkBG4sSDMdcL_oCj7hCeQ50Q3krJXFPN98_F8WNB5h378vwDL6SnP2mIOA7SjN3WLm-XV1gOouuyWbIqw-oBsJG-C0L7CInHg1j1MzLttrHA9kQA" alt="" />
                </Grid>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                    <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>

                        {/* +++++++++++ loding ++++++++  */}


                        {isLoading && <CircularProgress />}

                        {/* ++++ alert +++  */}
                        
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {/* ++++++ authentication eror +++++ 
                         */}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <Button onClick={handelGoogleSignIn} 
                               variant='contained'>Google sign in </Button>
                </Grid>
                
            </Grid>
        </Container>
        </div>
               );
};

export default Login;