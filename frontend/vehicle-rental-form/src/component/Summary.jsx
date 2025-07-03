import React, { useState } from "react";
import { Button, Typography, Stack, Alert } from "@mui/material";
import axios from "axios";

const Step6Summary = ({ formData, prevStep, handleSubmit }) => {
  const [error, setError] = useState("");

  console.log(handleSubmit, "8");
  const confirmBooking = async () => {
    setError("");
    try {
      await handleSubmit();
    } catch (err) {
      setError("Selected vehicle is already booked for the given dates.");
    }
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Booking Summary
      </Typography>
      <Stack spacing={1}>
        <Typography>
          {" "}
          Name: {formData.firstName} {formData.lastName}
        </Typography>
        <Typography> Wheels: {formData.wheels}</Typography>
        <Typography>
          Dates: {formData.dateRange[0]?.format("DD-MM-YYYY")} to{" "}
          {formData.dateRange[1]?.format("DD-MM-YYYY")}
        </Typography>
      </Stack>

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
        <Button onClick={prevStep}>Back</Button>
        <Button variant="contained" onClick={confirmBooking}>
          Confirm & Book
        </Button>
      </Stack>
    </div>
  );
};

export default Step6Summary;
