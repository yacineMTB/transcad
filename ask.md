// 		union() {
// 			translate([circle_radius, circle_radius, 0])
// 			circle(circle_radius);
// 			translate([circle_radius, 0, 0])
// 			square([circle_radius, circle_radius]);
// 			translate([circle_radius, 0, 0])
// 			square([hinge_length - circle_radius * 2, arm_width]);
// 			translate([hinge_length - circle_radius * 2, 0, 0])
// 			square([circle_radius, circle_radius]);
// 			translate([hinge_length - circle_radius, circle_radius, 0])
// 			circle(circle_radius);
// 		}

if the above becomes this


    union(
      circle(circle_radius).translate([circle_radius, circle_radius, 0]),
      square([circle_radius, circle_radius]).translate([circle_radius, 0, 0]),
      square([hinge_length - circle_radius * 2, arm_width]).translate([circle_radius, 0, 0]),
      square([circle_radius, circle_radius]).translate([hinge_length - circle_radius * 2, 0, 0]),
			circle(circle_radius).translate([hinge_length - circle_radius, circle_radius, 0]),
    ),


then this becomes what?


// 		union() {
// 			translate([circle_radius, circle_radius, 0])
// 			circle(thread_r);
// 			translate([hinge_length - circle_radius, circle_radius, 0])
// 			circle(thread_r);
// 		}

The equivalent code would be:

```
union(
  circle(thread_r).translate([circle_radius, circle_radius, 0]),
  circle(thread_r).translate([hinge_length - circle_radius, circle_radius, 0]),
)
```