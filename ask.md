include <Round-Anything/polyround.scad>
tol=0.05;
$fn=50;
brg_608_th=7;
brg_608_outer_d=22;
brg_608_inner_d=8;
brg_608_inner_shoulder_d=10;
pulley_cable_d= brg_608_outer_d+2*3;
pulley_shoulder= 1; // lateral shoulder thickness
nail_d= 4.6; // your nail or screw diameter (better keep it tight)
brg_tightness=0.0; // optional additional friction to press-fit the bearing in place (inside=cover & outside=pulley) - or negative to give some free play
cover_leg_outer_d= 8; // zero or negative to hide the leg
cover_leg_inner_d= 3;
cover_angular_size= 70; // how wide is the cover in degrees, zero to disable
cover_gap=0.6; // gap between the cover and the bearing
cover_th= pulley_shoulder; // thickness of the cover plate
reinforced_legs=true; // add longitudinal paths for slicers
pulley_d= pulley_cable_d+brg_608_th;
pulley_overhang_correction= pulley_d/30; // controls how deep is the groove of the pulley
module debug_bearing_608()
{
	%difference()
	{
		cylinder(r= brg_608_outer_d/2, h=brg_608_th);
		translate([0,0,-tol]) cylinder(r= brg_608_inner_d/2, h=brg_608_th + 2*tol);
		translate([0,0,-tol]) cylinder(r= 17.5/2, h=0.66);
		translate([0,0,brg_608_th-0.66+tol]) cylinder(r= 17.5/2, h=0.66);
	}
}
debug_bearing_608();