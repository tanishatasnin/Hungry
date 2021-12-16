import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { NavLink, useLocation ,useNavigate} from 'react-router-dom';
import useAuth from '../Login/Firebase/Context/useAuth';

// import useAuth from '../Context/useAuth'
const Register = () => {
    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const history = useNavigate();
    const { user, registerUser,signInWithGoogle, isLoading, authError } = useAuth();
                    //  +++++++++++++ on blur ++++++ 
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }  

    // +++++++++++++++++++++++++++++++++++++++ handle submit ++++++++++ 

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        // ++++++++++ userinformation collect ++++ 



        registerUser(loginData.email, loginData.password,loginData.name, history);
        e.preventDefault();
    }

    // +++++++++++++ google sign in ++++++++++ 

    const handelGoogleSignIn = e =>{
        signInWithGoogle(location, history)
       }
    return (
               <div className='login'>
        <Container>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                    
                </Grid>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                    <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name "
                            name="name"
                            type="text"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
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
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="ReType Your Password"
                            type="password"
                            name="password2"
                            onChange={handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {/* ++++++ loadig+++++  */}
                    {isLoading && <CircularProgress />}
                    {/* ++++ alert for succeccful+++++++  */}

                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {/* ++++++++ authentication error +++++  */}
                    {authError && <Alert severity="error">{authError}</Alert>}
                    <Button onClick={handelGoogleSignIn} 
                               variant='contained'>Google sign in </Button>
                </Grid>
                
            </Grid>
        </Container>
        </div>
    );
};

export default Register;