const { Booking } = require('../models');
const { Op } = require('sequelize');

const createBooking = async (req, res) => {
  try {
    const { firstName, lastName, startDate, endDate, vehicleId } = req.body;

    if (!firstName || !lastName || !startDate || !endDate || !vehicleId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const conflict = await Booking.findOne({
      where: {
        vehicleId,
        [Op.or]: [
          {
            startDate: { [Op.between]: [startDate, endDate] }
          },
          {
            endDate: { [Op.between]: [startDate, endDate] }
          },
          {
            [Op.and]: [
              { startDate: { [Op.lte]: startDate } },
              { endDate: { [Op.gte]: endDate } }
            ]
          }
        ]
      }
    });

    if (conflict) {
      return res.status(409).json({ error: 'Booking conflict for this vehicle' });
    }

    const newBooking = await Booking.create({
      firstName, lastName, startDate, endDate, vehicleId
    });

    res.status(201).json(newBooking);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create booking' });
  }
};

module.exports = { createBooking };
