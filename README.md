
# Vehicle Rental App


What is Done
Full backend setup using Node.js, Sequelize ORM, and MySQL2
Database tables with relations and seed data

API endpoints:
GET /vehicleTypes – Get all vehicle types
GET /vehicles – Get all vehicles based on type
POST /bookings – Create booking with date overlap validation

Frontend form built with React and Material UI

One question per screen form (multi-step)

Date range picker using MUI

Dynamic filtering of vehicle types and models

Booking logic working with success and error responses

Summary and success screen






What is Remaining
Proper form validation on each step (for example: if name fields are empty)
Disable form progress if required fields are missing
Prevent past dates in date picker
Add loading indicators during API calls
Show more detailed error messages from server 


What Can Be Improved 

Booking history page 
Deployment to Vercel / Render for demo
Use React Hook Form with Yup for cleaner validation
Use toast messages instead of alerts for a smoother UI