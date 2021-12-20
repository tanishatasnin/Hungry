import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../Pages/Login/Login/Firebase/Context/useAuth'
const Buy = () => {
               const [bookedProduct ,setbookedProduct]=useState(false);
    const {user}=useAuth({});
    const initialInfo = {name:'', customerName: user.displayName, customerEmail: user.email, number: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        console.log(newInfo);
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = e => {
        // collect data
        const customer = {
            ...bookingInfo,
           
        
            // date: date.toLocaleDateString()
        } 
        fetch('https://serene-tor-99582.herokuapp.com/customers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setbookedProduct(true);
                    
                    
                }
            });
        console.log(customer)
        e.preventDefault();
    } 

               return (
                              <div>
                              <form  onSubmit={handleBookingSubmit}>
                              <TextField
                                              sx={{ width: '90%', m: 1 }}
                                              id="outlined-size-small"
                                              onBlur={handleOnBlur}
                                              placeholder="Product name"
                                              name="name"
                                              
                                              size="small"
                                          />
                                          
                                          <TextField
                                              sx={{ width: '90%', m: 1 }}
                                              id="outlined-size-small" 
                                              onBlur={handleOnBlur}
                                              placeholder="Name"
                                              name="customerName"
                                              defaultValue={user.displayName}
                                              size="small"
                                          />
                                          <TextField
                                              sx={{ width: '90%', m: 1 }}
                                              id="outlined-size-small"
                                              onBlur={handleOnBlur}
                                              name ="email"
                                              placeholder="Email"
                                              defaultValue={user.email}
                                              size="small"
                                          />
                                          <TextField
                                              sx={{ width: '90%', m: 1 }}
                                              id="outlined-size-small"
                                              onBlur={handleOnBlur}
                                              name="number"
                                              // defaultValue="Phone Number"
                                              placeholder="Phone Number"
                                              size="small"
                                          />
                                          
                                          <Button type="submit" variant="contained">Submit</Button>
                                          {bookedProduct && <Alert severity="success">Booking successfully!</Alert>}
                                      </form>
                          </div>
               );
};

export default Buy;