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

const Model = ({ formData, setFormData, nextStep, prevStep }) => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    if (formData.vehicleTypeId) {
      axios
        .get(`http://localhost:8000/vehicles?typeId=${formData.vehicleTypeId}`)
        .then((res) => setVehicles(res.data))
        .catch((err) => console.error(err));
    }
  }, [formData.vehicleTypeId]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <Box width="100%" maxWidth={350}>
        <Typography variant="h5" align="center" gutterBottom>
          Select Vehicle Model
        </Typography>

        <RadioGroup
          value={formData.vehicleId}
          onChange={(e) =>
            setFormData({ ...formData, vehicleId: e.target.value })
          }
        >
          {vehicles.map((vehicle) => (
            <FormControlLabel
              key={vehicle.id}
              value={vehicle.id.toString()}
              control={<Radio />}
              label={vehicle.modelName}
            />
          ))}
        </RadioGroup>

        <Stack direction="row" justifyContent="space-between" mt={3}>
          <Button onClick={prevStep}>Back</Button>
          <Button
            variant="contained"
            onClick={nextStep}
            disabled={!formData.vehicleId}
          >
            Next
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Model;
