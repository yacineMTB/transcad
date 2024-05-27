// gym
const scadDeps = ['Round-Anything/polyround.scad'];
const fs = require('fs');
const { 
  roundPolygon,
  arm,
 } = require('./shapes/index');

fs.writeFileSync('./dist/output.scad', arm.serialize({ $fn: 100 }, 0, scadDeps));