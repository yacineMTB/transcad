// gym
const scadDeps = ['Round-Anything/polyround.scad'];
const fs = require('fs');
const {union} = require('./src/index');
const { roundPolygon, arm, debugBearing608, pulley } = require('./shapes/index');
 const armObjs = [
  arm(15, 200, 20, 4).linear_extrude(2),
  arm(15, 200, 20, 4).linear_extrude(2).translate([0, 0, 50]),
 ]

const pullehs = [];
const totalPulleys = 3;
const pulleyDistance = 30;
for (let i = 0; i < totalPulleys; i++) {
  const pulleh = union(debugBearing608(), pulley()).translate([15, 15, i * pulleyDistance]);
  pullehs.push(pulleh);
}
const pulleys = union(...pullehs);

 const out = union(
  pulleys,
  ...armObjs
);

fs.writeFileSync('./dist/output.scad', out.serialize({ $fn: 100 }, 0, scadDeps));