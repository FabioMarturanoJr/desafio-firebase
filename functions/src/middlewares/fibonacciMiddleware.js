const buildFibonacci = (length) => {
  const arrFibonacci = [];

  for (let index = 0; index < length; index += 1) {    
    (index == 0 || index == 1) ? arrFibonacci.push(1) 
      : arrFibonacci.push(arrFibonacci[index - 1] + arrFibonacci[index - 2]); 
  }
  
  return arrFibonacci;
};

const generatorFibonacci = (req, res) => {
  const { length } = req.params;
  const fibonacci = buildFibonacci(length);
  return res.status(200).json({ positions: length, fibonacci: fibonacci });
};

module.exports = {
  generatorFibonacci
};