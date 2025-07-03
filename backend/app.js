const express = require('express');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors())

app.post('/test', (req, res) => {
    console.log('Request received at /test');
    console.log('Request body:', req.body);
    res.send('Postman is working!');
  });


const vehicleTypeRoutes = require('./src/routes/vehicleTypes');
const vehicleRoutes = require('./src/routes/vehicles');
const bookingRoutes = require('./src/routes/bookings');

app.use('/vehicle-types', vehicleTypeRoutes);
app.use('/vehicles', vehicleRoutes);
app.use('/bookings', bookingRoutes);



module.exports = app;
