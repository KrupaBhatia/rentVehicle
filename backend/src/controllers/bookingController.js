const { Booking } = require('../models');
const { Op } = require('sequelize');

const createBooking = async (req, res) => {
  try {
    const { firstName, lastName, startDate, endDate, vehicleId } = req.body;

    if (!firstName || !lastName || !startDate || !endDate || !vehicleId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const normalizedStart = new Date(startDate);
    const normalizedEnd = new Date(endDate);

    const conflict = await Booking.findOne({
      where: {
        vehicleId,
        [Op.or]: [
          {
            startDate: { [Op.between]: [normalizedStart, normalizedEnd] }
          },
          {
            endDate: { [Op.between]: [normalizedStart, normalizedEnd] }
          },
          {
            [Op.and]: [
              { startDate: { [Op.lte]: normalizedStart } },
              { endDate: { [Op.gte]: normalizedEnd } }
            ]
          }
        ]
      }
    });

    if (conflict) {
      return res.status(409).json({ error: 'Booking conflict for this vehicle' });
    }

    const newBooking = await Booking.create({
      firstName,
      lastName,
      startDate: normalizedStart,
      endDate: normalizedEnd,
      vehicleId
    });

    return res.status(201).json(newBooking);
  } catch (err) {
    console.error('Booking error:', err);
    return res.status(500).json({ error: 'Failed to create booking' });
  }
};

module.exports = { createBooking };
