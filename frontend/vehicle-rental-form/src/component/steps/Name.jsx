import React from 'react';
import { TextField, Button, Typography, Box, Stack } from '@mui/material';

const Name = ({ formData, setFormData, nextStep }) => {
  const handleNext = () => {
    if (formData.firstName && formData.lastName) nextStep();
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <Box width="100%" maxWidth={350}>
        <Typography variant="h5" align="center" gutterBottom>
          What is your name?
        </Typography>

        <Stack spacing={2} mt={3}>
          <TextField
            size="small"
            label="First Name"
            variant="outlined"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
          <TextField
            size="small"
            label="Last Name"
            variant="outlined"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            sx={{ mt: 2 }}
            fullWidth
          >
            Next
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Name;
