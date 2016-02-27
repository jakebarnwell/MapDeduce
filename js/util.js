
function calcPostion (event) {
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

function displayPostion (event) {
    pos = calcPostion(event);

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

function createResourceElem(resource) {
    var div = $('<div>');
    var img = $('<img>');
    var filename = icon_data[resource].filename;

    img.attr('src',  'resources/icons/svg/' + filename);
    img.attr('data-toggle', 'modal');
    div.addClass('resource');
    img.addClass(resource);
    div.append(img);

    return div;
}

// function createResourceContainer() {
//     var div = $('<div>');
//     var map_container = $('#map-container');
//     var map = $('#map');
//
//     // div.css('width', map.css('width'));
//     // div.css('height', map.css('height'));
//
//     div.attr('id', 'resource-container');
//
//     map_container.append(div);
// }

function loadMap(building, floor) {
    $('#map-container').empty();

    changeMap(building, floor);
    // createResourceContainer();

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
            var elem = createResourceElem(resource);
            $('#map-container').append(elem);

            var elem_width = elem.css('width');
            var elem_height = elem.css('height');
            elem_width = Number(elem_width.substring(0, elem_width.length-2));
            elem_height = Number(elem_height.substring(0, elem_height.length-2));
            elem.css('left', resource_obj.x*100 + '%');
            elem.css('top', resource_obj.y*100 + '%');
        }
    }
}

function loadMapEvent(event) {
    var map_id = $('#floor_input').val();
    var bldg_flr = map_id.split('_');
    var building = bldg_flr[0];
    var floor = bldg_flr[1];

    loadMap(building, floor);

    $('#map').click(displayPostion);
}
