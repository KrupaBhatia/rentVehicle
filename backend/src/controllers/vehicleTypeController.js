const { VehicleType } = require('../models');

const getVehicleTypes = async (req, res) => {
  try {
    const wheels = parseInt(req.query.wheels);
    if (![2, 4].includes(wheels)) {
      return res.status(400).json({ error: 'Invalid wheel count' });
    }

    const types = await VehicleType.findAll({ where: { wheels } });
    res.json(types);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch vehicle types' });
  }
};

module.exports = { getVehicleTypes };
