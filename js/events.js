var a = 0;

function get_amenity_object(bldg, floor, type, id) {
	possibles = resource_data[bldg][floor][type];
	for(var i = 0; i < possibles.length; i++) {
		if(possibles[i]["id"] === id) {
			return possibles[i];
		}
	}
	return null;
}
function add_resource_handlers() {
    $(".resource-img").click(function(e) {
    	var target = $(e.target);
        $("#icon-notes-title").html("Notes for this <b>" + target.attr("data-type") + ' | ' + target.attr("data-id") + "</b>:");
        // var notes = get_amenity_object(targ, floor, type, id);
        var notes = "";
        if(notes === null || notes === "") {
        	notes = "No available notes.";
        }
        $("#icon-notes-body").html(notes);
        $("#icon-notes").modal('show');
    });
}
