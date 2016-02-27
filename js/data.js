
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
		1: {filename: "", north: 0},
		2: {filename: "", north: 0},
		3: {filename: "", north: 0},
		4: {filename: "", north: 0},
		5: {filename: "", north: 0},
		6: {filename: "", north: 0}},
	3: {0: {filename: "", north: 0},
		1: {filename: "", north: 0},
		2: {filename: "", north: 0},
		3: {filename: "", north: 0},
		4: {filename: "", north: 0},
		5: {filename: "", north: 0},
		6: {filename: "", north: 0}}
};

icon_map = {
	wf: { filename: 'drink-2.svg', color: ''},
	wcm: { filename: 'men-restroom-sign.svg', color: ''},
	wcf: { filename: 'women-restroom-sign.svg', color: ''},
	wcu: { filename: 'toilets-sign.svg', color: ''},
	wcma: { filename: 'men-restroom-sign.svg', color: ''},
	wcfa: { filename: 'women-restroom-sign.svg', color: ''},
	wcua: { filename: 'toilets-sign.svg', color: ''},
	elev: { filename: 'up-arrow-2.svg', color: ''},
	stairs: { filename: 'toilets-sign.svg', color: ''},
	ramp: { filename: 'toilets-sign.svg', color: ''},
	lift: { filename: 'elevator-with-a-occupant.svg', color: ''},
	rdoor: { filename: 'toilets-sign.svg', color: ''},
	door: { filename: 'direction.svg', color: ''},
	adoor: { filename: 'toilets-sign.svg', color: ''},
};
