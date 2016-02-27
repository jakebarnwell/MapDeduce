
// wf = water fountain, wcm = bathroom male, wcf = bathroom female,
//  elev = elevators

resource = {
	7: {0: {stairs: [{x:0, y:0, n:""},{x:0, y:0, n:""}], elev: [{x:0, y:0, n:""}], ramp: [{x:0, y:0, n:""}], corridor: [{x:0, y:0, n:""},{x:0, y:0, n:""}]},
		1: {ramp: [{x:0, y:0, n:""}], stairs:[{x:0, y:0, n:""},{x:0, y:0, n:""},{x:0, y:0, n:""}], elev: [{x:0, y:0, n:""},{x:0, y:0, n:""}], wcm: [{x:0, y:0, n:""}], corridor: [{x:0, y:0, n:""},{x:0, y:0, n:""},{x:0, y:0, n:""}]},
		2: {elev: [{x:0, y:0, n:""}, {x:0, y:0, n:""}], stairs: [{x:0, y:0, n:""},{x:0, y:0, n:""},{x:0, y:0, n:""}], wcm: [{x:0, y:0, n:""}], corridor: [{x:0, y:0, n:""},{x:0, y:0, n:""}]},
		3: {elev: [{x:0, y:0, n:""}], stairs: [{x:0, y:0, n:""},{x:0, y:0, n:""}], corridor: [{x:0, y:0, n:""},{x:0, y:0, n:""},{x:0, y:0, n:""}]},
		4: {stairs: [{x:0, y:0, n:""}], elev: [{x:0, y:0, n:""}], corridor: [{x:0, y:0, n:""},{x:0, y:0, n:""},{x:0, y:0, n:""}]},
		5: {stairs: [{x:0, y:0, n:""}], elev: [{x:0, y:0, n:""}]},
		6: {elev: [{x:0, y:0, n:""}]}},
	3: {0: {stairs: [{x:0, y:0, n:""},{x:0, y:0, n:""},{x:0, y:0, n:""}], elev: [{x:0, y:0, n:""},{x:0, y:0, n:""}], corridor: [{x:0, y:0, n:""},{x:0, y:0, n:""}]},
		1: {stairs: [{x:0, y:0, n:""},{x:0, y:0, n:""},{x:0, y:0, n:""},{x:0, y:0, n:""},{x:0, y:0, n:""},{x:0, y:0, n:""},{x:0, y:0, n:""},{x:0, y:0, n:""},{x:0, y:0, n:""}], elev: [{x:0, y:0, n:""}], corridor: [{x:0, y:0, n:""},{x:0, y:0, n:""},{x:0, y:0, n:""}]},
		2: {stairs: [{x:0, y:0, n:""},{x:0, y:0, n:""},{x:0, y:0, n:""},{x:0, y:0, n:""},{x:0, y:0, n:""},{x:0, y:0, n:""}], elev: [{x:0, y:0, n:""}]},
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
	wf: { filename: 'drink-2.svg'},
	wcm: { filename: 'men-restroom-sign.svg'},
	wcf: { filename: 'women-restroom-sign.svg'},
	wcu: { filename: 'black.svg'},
	wcma: { filename: 'men-restroom-sign.svg'},
	wcfa: { filename: 'women-restroom-sign.svg'},
	wcua: { filename: 'toilets-sign.svg'},
	elev: { filename: 'up-arrow-2.svg'},
	stairs: { filename: 'ascending-stairs-signal.svg'},
	ramp: { filename: 'arrows-1.svg'},
	lift: { filename: 'elevator-with-a-occupant.svg'},
	rdoor: { filename: 'toilets-sign.svg'},
	door: { filename: 'opened-door-aperture.svg'},
	adoor: { filename: 'toilets-sign.svg'}
};
