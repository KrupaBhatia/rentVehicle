const { Vehicle } = require('../models');

const getVehiclesByType = async (req, res) => {
  try {
    const { typeId } = req.query;
    
    const vehicles = await Vehicle.findAll({ where: { vehicleTypeId: typeId } });
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch vehicles' });
  }
};

module.exports = { getVehiclesByType };
