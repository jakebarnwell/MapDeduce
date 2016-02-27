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

function onPortalClick() {
    var a = $(this);
    loadMapTransition(a.data('building'), a.data('floor'));
    $('.close').click();
}

function makeLink(building, floor) {
    var a = $('<a>');
    a.data('building', building);
    a.data('floor', floor);
    a.text('Floor ' + floor + ' of Building ' + building);
    a.click(onPortalClick);

    return a;
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

        var key = bldg+'|'+floor+'|'+type+'|'+id;
        var neighbors = map_adjacency[key];
        if (neighbors && neighbors.length > 0) {
            var notes = notes + '<br>Goes to:<br>';
            $("#icon-notes-body").html(notes);

            for (var i in neighbors) {
                var n = neighbors[i];
                var components = n.split('|');
                var a = makeLink(components[0], components[1]);
                // notes = notes + a.html();
                $("#icon-notes-body").append(a);
            }
        }

        $("#icon-notes").modal({backdrop: false});
    });
}
