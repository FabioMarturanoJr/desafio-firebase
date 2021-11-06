const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const fetchFabioStreet = async () => {
  const request = await fetch('https://viacep.com.br/ws/83050150/json/');
  const response = await request.json();
  return request.ok ? Promise.resolve(response) : Promise.reject(response);
};

module.exports = {
  fetchFabioStreet,
};