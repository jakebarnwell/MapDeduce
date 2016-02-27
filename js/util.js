
function calcPosition (event) {
    var pageX = event.pageX;
    var pageY = event.pageY;

    var map = $('#map');
    var map_width = map.css('width');
    var map_height = map.css('height');
    var map_offset = map.offset();
    map_width = Number(map_width.substring(0, map_width.length-2));
    map_height = Number(map_height.substring(0, map_height.length-2));
    var map_x = (pageX - map_offset.left) / map_width;
    var map_y = (pageY - map_offset.top) / map_height;

    return {
        'x': map_x,
        'y': map_y
    };
}

function displayPosition (event) {
    pos = calcPosition(event);

    $('#x_pos').text(pos.x);
    $('#y_pos').text(pos.y);
}

function changeMap(building, floor) {
    var map = $('<img>');
    var src = 'resources/img/' + map_data[building][floor].filename;

    map.attr('src', src);
    map.attr('id', 'map');
    $('#map-container').append(map);
}

function changeMapEvent(event) {
    var map_id = $('#floor_input').val();
    var bldg_flr = map_id.split('_');
    var building = bldg_flr[0];
    var floor = bldg_flr[1];

    changeMap(building, floor);
}

function createResourceElem(resource, building, floor, id) {
    var div = $('<div>');
    var img = $('<img>');
    var filename = icon_data[resource].filename;

    img.attr('src',  'resources/icons/svg/' + filename);
    img.attr('data-toggle', 'modal');
    img.attr("data-bldg", building);
    img.attr("data-floor", floor);
    img.attr("data-id", id);
    img.attr("data-type", resource);
    div.addClass('resource');
    img.addClass(resource);
    img.addClass("resource-img");
    div.append(img);

    return div;
}

function hideMap(callback) {
    $('#map-container').animate({
        'opacity': 0
    }, 250, 'swing', callback);
}

function showMap () {
    $('#map-container').animate({
        'opacity': 1
    }, 250, 'swing');
}

function loadMap(building, floor) {
    $('#map-container').empty();

    $("#bldg-floor-header").text("Building " + building + ", Floor " + floor)
    changeMap(building, floor);

    var data = map_data[building][floor];
    var resources = resource_data[building][floor];
    var type_of_resource = Object.keys(resources);
    var map = $('#map');

    var map_width = map.css('width');
    var map_height = map.css('height');
    map_width = Number(map_width.substring(0, map_width.length-2));
    map_height = Number(map_height.substring(0, map_height.length-2));

    for (var resource in resources) {
        var resource_list = resources[resource];

        for (var i in resource_list) {
            var resource_obj = resource_list[i];
            var elem = createResourceElem(resource, building, floor, resource_obj.id);
            $('#map-container').append(elem);

            var elem_width = elem.css('width');
            var elem_height = elem.css('height');
            elem_width = Number(elem_width.substring(0, elem_width.length-2));
            elem_height = Number(elem_height.substring(0, elem_height.length-2));
            elem.css('left', resource_obj.x*100 + '%');
            elem.css('top', resource_obj.y*100 + '%');
        }
    }

    // must place here because can only put handlers on existing entities
    add_resource_handlers();
}

function loadMapTransition(building, floor) {
    hideMap(function () {
        loadMap(building, floor);
        showMap();
        $('#map').click(displayPosition); // remove after dev
    });
}

function inputToBuilding(user_input) {
    var building, floor;
    var re = /[NnSs]?[WwEe]?\d{1,2}-[DdGg]?\d{3}/;
    if (user_input.search(re) != -1) {
        var bldg_rm = user_input.split('-');
        building = bldg_rm[0];
        var room_re = /d{3}/;
        floor = bldg_rm('-')[1].match(room_re)[0];
    } else {
        var bldg_flr = user_input.split('_');
        building = bldg_flr[0];
        floor = bldg_flr[1];
    }
    return [building, floor];
}

function loadMapEvent(event) {
    var map_id = $('#floor_input').val();
    // var bldg_flr = map_id.split('_');
    // var building = bldg_flr[0];
    // var floor = bldg_flr[1];

    var bldg_flr = inputToBuilding(map_id);
    var building = bldg_flr[0];
    var floor = bldg_flr[1];
    loadMapTranstion(building, floor);
}
