// Import the chiSquaredTest function from the 'chi-squared-test' package
const chiSquaredTest = require('chi-squared-test');


exports.getChiSquare = (req, res, next) => {
const expected =  [0.301, 0.176, 0.125, 0.097, 0.079, 0.067, 0.058, 0.051, 0.046];
const observed = req.body.observed;
const reduction = 1;
let probability = chiSquaredTest(observed, expected, reduction);

res.status(200).json({
  status: 'success',
  data: probability
})
}