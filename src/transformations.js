const modifiers = require('./modifiers.js');
const serialize = require('./serialize.js');
const { create } = require('./utils.js');

const undef = 'undef';

const transformation = type => (obj, params) => create({ ...transformations, ...modifiers, serialize }, { type, params, children: [obj] });

const extrudeWithRadius = function ( length,r1=0,r2=0,fn=30 ) {
  return transformation('extrudeWithRadius')(this, { length, r1, r2, fn });
};

const translate = function (v) {
  return transformation('translate')(this, { v });
};

const translate_x = function (x) {
  return transformation('translate')(this, { v: [x, 0, 0] });
};

const translate_y = function (y) {
  return transformation('translate')(this, { v: [0, y, 0] });
};

const translate_z = function (z) {
  return transformation('translate')(this, { v: [0, 0, z] });
};

const scale = function (v) {
  return transformation('scale')(this, { v });
};

const scale_x = function (x) {
  return transformation('scale')(this, { v: [x, 1, 1] });
};

const scale_y = function (y) {
  return transformation('scale')(this, { v: [1, y, 1] });
};

const scale_z = function (z) {
  return transformation('scale')(this, { v: [1, 1, z] });
};

const resize = function (v, auto = false) {
  return transformation('resize')(this, { newsize: v, auto });
};

const mirror = function (v) {
  return transformation('mirror')(this, { v });
};

const mirror_x = function () {
  return transformation('mirror')(this, { v: [1, 0, 0] });
};

const mirror_y = function () {
  return transformation('mirror')(this, { v: [0, 1, 0] });
};

const mirror_z = function () {
  return transformation('mirror')(this, { v: [0, 0, 1] });
};

const color = function (c, alpha = 1) {
  return transformation('color')(this, { c, alpha });
};

const rotate = function (a, v = undef) {
  return transformation('rotate')(this, { a, v });
};

const rotate_x = function (a) {
  return transformation('rotate')(this, { a, v: [1, 0, 0] });
};

const rotate_y = function (a) {
  return transformation('rotate')(this, { a, v: [0, 1, 0] });
};

const rotate_z = function (a) {
  return transformation('rotate')(this, { a, v: [0, 0, 1] });
};

const radius_offset = function (r = undef) {
  return transformation('offset')(this, { r, delta: undef, chamfer: undef });
};

const delta_offset = function (delta, chamfer = false) {
  return transformation('offset')(this, { r: undef, delta, chamfer });
};

const projection = function (cut = false) {
  return transformation('projection')(this, { cut });
};

const linear_extrude = function (height = undef, params = {}) {
  return transformation('linear_extrude')(this, {
    height,
    center: params.center || false,
    convexity: params.convexity || undef,
    twist: params.twist || undef,
    slices: params.slices || undef,
    scale: params.scale || 1,
    $fn: params.$fn || 20,
  });
};

const rotate_extrude = function (angle = 360, params = {}) {
  return transformation('rotate_extrude')(this, {
    angle,
    convexity: params.convexity || 2,
  });
};

const transformations = { translate,
   translate_x,
   translate_y,
   translate_z,
   scale,
   scale_x,
   scale_y,
   scale_z,
   resize,
   mirror,
   mirror_x,
   mirror_y,
   mirror_z,
   rotate,
   rotate_x,
   rotate_y,
   rotate_z,
   color,
   radius_offset,
   delta_offset,
   projection,
   linear_extrude,
   rotate_extrude,
   extrudeWithRadius };

module.exports = transformations;
