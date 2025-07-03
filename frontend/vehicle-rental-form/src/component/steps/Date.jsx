import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Typography, Button, Stack, Box } from '@mui/material';

const DateRange = ({ formData, setFormData, nextStep, prevStep }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <Box width="100%" maxWidth={350}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Typography variant="h5" align="center" gutterBottom>
            Select Booking Dates
          </Typography>

          <Stack spacing={2}>
            <DatePicker
              label="Start Date"
              value={formData.dateRange[0]}
              onChange={(newDate) =>
                setFormData({
                  ...formData,
                  dateRange: [newDate, formData.dateRange[1]],
                })
              }
              slotProps={{ textField: { fullWidth: true } }}
            />
            <DatePicker
              label="End Date"
              value={formData.dateRange[1]}
              onChange={(newDate) =>
                setFormData({
                  ...formData,
                  dateRange: [formData.dateRange[0], newDate],
                })
              }
              slotProps={{ textField: { fullWidth: true } }}
            />

            <Stack direction="row" spacing={2} justifyContent="space-between" mt={3}>
              <Button onClick={prevStep}>Back</Button>
              <Button
                variant="contained"
                color="primary"
                onClick={nextStep}
                disabled={!formData.dateRange[0] || !formData.dateRange[1]}
              >
                Next
              </Button>
            </Stack>
          </Stack>
        </LocalizationProvider>
      </Box>
    </Box>
  );
};

export default DateRange;
