var a = 0;

function get_amenity_object(bldg, floor, type, id) {
	possibles = resource_data[Number(bldg)][Number(floor)][type];
	for(var i = 0; i < possibles.length; i++) {
		if(possibles[i]["id"] === Number(id)) {
			return possibles[i];
		}
	}
	return null;
}

function add_resource_handlers() {
    $(".resource-img").click(function(e) {
    	var target = $(e.target);
        var bldg = target.attr("data-bldg");
        var floor = target.attr("data-floor");
        var type = target.attr("data-type");
        var id = target.attr("data-id");
        $("#icon-notes-title").html("Building " + bldg +", floor " + floor + ": <b>" + icon_data[type]["human_readable"] + "</b> (id = " + id + ")");
        var notes = get_amenity_object(bldg, floor, type, id);
        if(notes !== null) {
        	notes = notes.n;
        }
        if(notes === "" || notes === null) {
        	notes = "No available notes.";
        }
        $("#icon-notes-body").html(notes);
        $("#icon-notes").modal({backdrop: false});
    });
}
