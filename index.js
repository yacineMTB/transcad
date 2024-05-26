// gym
const scadDeps = ['Round-Anything/polyround.scad'];
const fs = require('fs');
const { circle, square, polygon, cube, cylinder, polyhedron, sphere, rounded_cube, rounded_square, polyRound, polyRoundExtrude } = require('./src/index');
// const { translate, translate_x, translate_y, translate_z, scale, scale_x, scale_y, scale_z, resize, mirror, mirror_x, mirror_y, mirror_z, rotate, rotate_x, rotate_y, rotate_z, color, radius_offset, delta_offset, projection, linear_extrude, rotate_extrude, } = require('./src/index');

polygon(polyRound);
const roundPolygon = polyRoundExtrude([[0, 0, 1], [5,0, 1], [10, 10,1], [0, 10,1]], 10, 4)
  .rotate([10, 0, 0])
  .translate([0, 40, 0])
  .rotate([0, 0, 2 * 10])


fs.writeFileSync('./dist/output.scad', roundPolygon.serialize({ $fn: 10 }, 0, scadDeps));