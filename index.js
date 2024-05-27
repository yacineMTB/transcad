// gym
const scadDeps = ['Round-Anything/polyround.scad'];
const fs = require('fs');
const {union} = require('./src/index');
const { roundPolygon, arm, debugBearing608, pulley } = require('./shapes/index');

 const armObj = arm(30, 180, 50, 7) 
 const bearing = debugBearing608();
 const out = union(
  bearing,
  armObj,
  pulley(),
  roundPolygon()
);

fs.writeFileSync('./dist/output.scad', out.serialize({ $fn: 100 }, 0, scadDeps));