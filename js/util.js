
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

function changeMap(event) {
    var map_id = $('#floor_input').val();
    var src = 'resources/img/' + map_id + '.svg';

    $('#map').attr('src', src);
}


$(function () {
    $('#map').click(displayPostion);
    $('#change_button').click(changeMap);
});
