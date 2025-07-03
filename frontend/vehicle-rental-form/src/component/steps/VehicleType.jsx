import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Stack
} from '@mui/material';
import axios from 'axios';

const VehicleType = ({ formData, setFormData, nextStep, prevStep }) => {
  const [vehicleTypes, setVehicleTypes] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/vehicle-types?wheels=${formData.wheels}`)
      .then((res) => setVehicleTypes(res.data))
      .catch((err) => console.error(err));
  }, [formData.wheels]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <Box width="100%" maxWidth={350}>
        <Typography variant="h5" align="center" gutterBottom>
          Select Vehicle Type
        </Typography>

        <RadioGroup
          value={formData.vehicleTypeId}
          onChange={(e) =>
            setFormData({ ...formData, vehicleTypeId: e.target.value })
          }
        >
          {vehicleTypes.map((type) => (
            <FormControlLabel
              key={type.id}
              value={type.id.toString()}
              control={<Radio />}
              label={type.name}
            />
          ))}
        </RadioGroup>

        <Stack direction="row" justifyContent="space-between" mt={3}>
          <Button onClick={prevStep}>Back</Button>
          <Button
            variant="contained"
            onClick={nextStep}
            disabled={!formData.vehicleTypeId}
          >
            Next
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default VehicleType;
