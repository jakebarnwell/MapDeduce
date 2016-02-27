
// wf = water fountain, wcm = bathroom male, wcf = bathroom female,
//  elev = elevators

resource = {
	7: {0: {stairs: [{x:0, y:0, n:"", id:0},{x:0, y:0, n:"", id:0}], elev: [{x:0, y:0, n:"", id:0}], ramp: [{x:0, y:0, n:"", id:0}], corridor: [{x:0, y:0, n:"", id:0},{x:0, y:0, n:"", id:0}]},
		1: {ramp: [{x:0.308375, y:0.0211709886547812, n:"", id:0}], stairs:[{x:0.361375, y:0.35990680713128037, n:"", id:0},{x:0.356375, y:0.4725486223662885, n:"", id:1},{x:0.467375, y:0.47011750405186387, n:"", id:2},{x: 0.066375, y:0.7213330632090762, n:"", id:3}], elev: [{x:0.346375, y:0.22538492706645058, n:"", id:1},{x:0.553375, y:0.5868111831442464, n:"", id:2}], wcm: [{x:0.713375, y:0.7432131280388979, n:"", id:0}], corridor: [{x:0.312375, y:0.9214951377633711, n:"", id:0},{x:0.986375, y:0.715660453808752, n:"", id:1}]},
		2: {elev: [{x:0, y:0, n:"", id:0}, {x:0, y:0, n:"", id:0}], stairs: [{x:0, y:0, n:"", id:0},{x:0, y:0, n:"", id:0},{x:0, y:0, n:"", id:0}], wcm: [{x:0, y:0, n:"", id:0}], corridor: [{x:0, y:0, n:"", id:0},{x:0, y:0, n:"", id:0}]},
		3: {elev: [{x:0, y:0, n:"", id:0}], stairs: [{x:0, y:0, n:"", id:0},{x:0, y:0, n:"", id:0}], corridor: [{x:0, y:0, n:"", id:0},{x:0, y:0, n:"", id:0},{x:0, y:0, n:"", id:0}]},
		4: {stairs: [{x:0, y:0, n:"", id:0}], elev: [{x:0, y:0, n:"", id:0}], corridor: [{x:0, y:0, n:"", id:0},{x:0, y:0, n:"", id:0},{x:0, y:0, n:"", id:0}]},
		5: {stairs: [{x:0, y:0, n:"", id:0}], elev: [{x:0, y:0, n:"", id:0}]},
		6: {elev: [{x:0, y:0, n:"", id:0}]}},
	3: {0: {stairs: [{x:0, y:0, n:"", id:0},{x:0, y:0, n:"", id:0},{x:0, y:0, n:"", id:0}], elev: [{x:0, y:0, n:"", id:0},{x:0, y:0, n:"", id:0}], corridor: [{x:0, y:0, n:"", id:0},{x:0, y:0, n:"", id:0}]},
		1: {stairs: [{x:0.284375, y:0.10056390977443609, n:"", id:0},{x:0.280375, y:0.13974079936683814, n:"", id:1},{x:0.186375, y:0.1828749505342303, n:"", id:2},{x:0.296375, y:0.8932034032449545, n:"", id:3},{x:0.345375, y:0.8611495844875346, n:"", id:4}], elev: [{x:0.057375, y:0.8678769291650178, n:"", id:0}], corridor: [{x:0.002375, y:0.07919469726948951, n:"", id:0},{x:0.989375, y:0.07761179263949347, n:"", id:1},{x:0.009375, y:0.9098239018599129, n:"", id:2},{x: 0.216375, y: 0.06217847249703205, n:"", id:3}], wcma: [{x: 0.131375, y: 0.171398891966759, n:"", id:0}]},
		2: {stairs: [{x:0, y:0, n:"", id:0},{x:0, y:0, n:"", id:0},{x:0, y:0, n:"", id:0},{x:0, y:0, n:"", id:0},{x:0, y:0, n:"", id:0},{x:0, y:0, n:"", id:0}], elev: [{x:0, y:0, n:"", id:0}]},
		3: {},
		4: {},
		5: {}}
};

map_data = {
	7: {0: {filename: "", north: 0},
		1: {filename: "7_1.svg", north: 0},
		2: {filename: "", north: 0},
		3: {filename: "", north: 0},
		4: {filename: "", north: 0},
		5: {filename: "", north: 0},
		6: {filename: "", north: 0}},
	3: {0: {filename: "", north: 0},
		1: {filename: "", north: 0},
		2: {filename: "", north: 0},
		3: {filename: "3_1", north: 0},
		4: {filename: "", north: 0},
		5: {filename: "", north: 0},
		6: {filename: "", north: 0}},
	4: {1: {filename: "4_1.svg", north: 0}},
	8: {1: {filename: "8_1.svg", north: 0}},
	10: {1: {filename: "10_1.svg", north: 0}}
};

icon_data = {
	wf: { filename: 'drink-2.svg', color: ''},
	wcm: { filename: 'men-restroom-sign.svg', color: ''},
	wcf: { filename: 'women-restroom-sign.svg', color: ''},
	wcu: { filename: 'toilets-sign.svg', color: ''},
	wcma: { filename: 'men-restroom-sign.svg', color: ''},
	wcfa: { filename: 'women-restroom-sign.svg', color: ''},
	wcua: { filename: 'toilets-sign.svg', color: ''},
	elev: { filename: 'up-arrow-2.svg', color: ''},
	stairs: { filename: 'ascending-stairs-signal.svg', color: ''},
	ramp: { filename: 'arrows-1.svg', color: ''},
	lift: { filename: 'elevator-with-a-occupant.svg', color: ''},
	rdoor: { filename: 'toilets-sign.svg', color: ''},
	door: { filename: 'direction.svg', color: ''},
	adoor: { filename: 'toilets-sign.svg', color: ''}
};
