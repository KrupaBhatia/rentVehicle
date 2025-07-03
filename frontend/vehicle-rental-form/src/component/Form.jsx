
import React, { useState } from "react";
import Name from "./steps/Name.jsx";
import Wheels from "./steps/Wheels.jsx";
import VehicleType from "./steps/VehicleType.jsx";
import VehicleModel from "./steps/Model.jsx";
import DateRange from "./steps/Date.jsx";
import Summary from "./Summary.jsx";
import Success from "./Success.jsx";
import axios from "axios";

const StepForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    wheels: "",
    vehicleTypeId: "",
    vehicleTypeName: "",
    vehicleId: "",
    vehicleName: "",
    dateRange: [null, null],
  });

  const handleSubmit = async () => {
    try {
      const startDate = formData.dateRange[0]?.toDate();  
      const endDate = formData.dateRange[1]?.toDate();
  
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        vehicleId: formData.vehicleId,
        startDate,
        endDate
      };

  
      const res = await axios.post('http://localhost:8000/bookings', payload);
      if (res.status === 201) {
        setStep(step + 1); 
      }      
    } catch (err) {
      console.error(" Booking error:", err);
      throw err; 
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      wheels: "",
      vehicleTypeId: "",
      vehicleTypeName: "",
      vehicleId: "",
      vehicleName: "",
      dateRange: [null, null],
    });
    setStep(0);
  };
  
  

  const steps = [
    <Name
      formData={formData}
      setFormData={setFormData}
      nextStep={() => setStep(step + 1)}
    />,
    <Wheels
      formData={formData}
      setFormData={setFormData}
      nextStep={() => setStep(step + 1)}
      prevStep={() => setStep(step - 1)}
    />,
    <VehicleType
      formData={formData}
      setFormData={setFormData}
      nextStep={() => setStep(step + 1)}
      prevStep={() => setStep(step - 1)}
    />,
    <VehicleModel
      formData={formData}
      setFormData={setFormData}
      nextStep={() => setStep(step + 1)}
      prevStep={() => setStep(step - 1)}
    />,
    <DateRange
      formData={formData}
      setFormData={setFormData}
      nextStep={() => setStep(step + 1)}
      prevStep={() => setStep(step - 1)}
    />,
    <Summary
      formData={formData}
      prevStep={() => setStep(step - 1)}
      handleSubmit={handleSubmit}
    />,
    <Success formData={formData} resetForm={resetForm} />
  ];

  return <div>{steps[step]}</div>;
};

export default StepForm;
