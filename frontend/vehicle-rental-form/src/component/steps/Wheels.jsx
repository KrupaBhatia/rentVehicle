import React from 'react';
import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Stack
} from '@mui/material';

const Wheels = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <Box width="100%" maxWidth={350}>
        <Typography variant="h5" align="center" gutterBottom>
          Number of Wheels
        </Typography>

        <RadioGroup
          value={formData.wheels}
          onChange={(e) => setFormData({ ...formData, wheels: e.target.value })}
        >
          <FormControlLabel value="2" control={<Radio />} label="2 Wheeler" />
          <FormControlLabel value="4" control={<Radio />} label="4 Wheeler" />
        </RadioGroup>

        <Stack direction="row" justifyContent="space-between" mt={3}>
          <Button onClick={prevStep}>Back</Button>
          <Button
            variant="contained"
            onClick={nextStep}
            disabled={!formData.wheels}
          >
            Next
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Wheels;
