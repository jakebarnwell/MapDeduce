
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
    var src = 'resources/img/' +map_data[building][floor].filename + '.svg';
    $('#map').attr('src', src);
}

function changeMapEvent(event) {
    var map_id = $('#floor_input').val();
    var bldg_flr = map_id.split('_');
    var building = bldg_flr[0];
    var floor = bldg_flr[1];

    changeMap(building, floor);
}

function createIconElem(resource, info) {
    var div = $('<div>');
    var img = $('<img>');
    var filename = icon_data[resource].filename;
    var color = icon_data[resource].color;

    div.addClass('resource');
    // div.css('background-color', color);
    // img.attr('src',  'resources/icons/svg/' + filename);
}

function loadMap(building, floor) {
    var data = map_data[building][floor];
    var resources = resource[building][floor];
    var type_of_resource = Object.keys(resources);

    changeMap(building, floor);

    for (var resource in resources) {
        var info = resources[resources];
        var elem = createIconElem(resource);
    }
}
