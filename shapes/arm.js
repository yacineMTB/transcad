const { circle, square, difference, union } = require('../src/index');

const arm_panel = (circle_radius, hinge_length, arm_width, thread_r) => {
  return difference(
    union(
      circle(circle_radius).translate([circle_radius, circle_radius, 0]),
      square([circle_radius, circle_radius]).translate([circle_radius, 0, 0]),
      square([hinge_length - circle_radius * 2, arm_width]).translate([circle_radius, 0, 0]),
      square([circle_radius, circle_radius]).translate([hinge_length - circle_radius * 2, 0, 0]),
			circle(circle_radius).translate([hinge_length - circle_radius, circle_radius, 0]),
    ),
  union(
    circle(thread_r).translate([circle_radius, circle_radius, 0]),
    circle(thread_r).translate([hinge_length - circle_radius, circle_radius, 0]),
  ));
}



module.exports =  arm_panel(30, 180, 50, 7);;