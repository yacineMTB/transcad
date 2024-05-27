const { circle, square, polygon, cube, cylinder, polyhedron, sphere, rounded_cube, rounded_square, polyRound, polyRoundExtrude } = require('../src/index');
const roundPolygon = () => polyRoundExtrude([[1, 0, 1], [5,0, 1], [10, 10,1], [0, 10,1]], 10, 4)
  .rotate([90, 0, 0])
  .translate([0, 40, 0])
  .rotate([0, 0, 50]);

module.exports = roundPolygon;