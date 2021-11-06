const { fetchFabioStreet } = require('../services/viaCepAPI');


const getFabioStreet = async (_req, res) => {
  const fabioStreet = await fetchFabioStreet();
  return res.status(200).json(fabioStreet);
};

module.exports = {
  getFabioStreet
};
