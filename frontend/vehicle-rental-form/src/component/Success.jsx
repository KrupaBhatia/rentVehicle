

import React from 'react';
import { Typography, Button, Box, Paper } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Success = ({ formData, resetForm }) => {
  return (
    <Box
      minHeight="80vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#f5f5f5"
      px={2}
    >
      <Paper elevation={3} sx={{ p: 5, textAlign: 'center', maxWidth: 400 }}>
        <CheckCircleOutlineIcon
          color="success"
          sx={{ fontSize: 60, mb: 2 }}
        />
        <Typography variant="h4" color="success.main" gutterBottom>
          Booking Confirmed!
        </Typography>

        <Typography variant="body1" gutterBottom>
          Thank you <strong>{formData.firstName} {formData.lastName}</strong>.<br />
          Your <strong>{formData.vehicleName}</strong> is booked from <br />
          <strong>{formData.dateRange[0]?.format('DD-MM-YYYY')}</strong> to <strong>{formData.dateRange[1]?.format('DD-MM-YYYY')}</strong>.
        </Typography>

        <Button
          variant="contained"
          sx={{ mt: 3 }}
          onClick={resetForm}
        >
          Book Another Vehicle
        </Button>
      </Paper>
    </Box>
  );
};

export default Success;
