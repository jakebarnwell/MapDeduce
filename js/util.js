
function calcPostion (event) {
    var pageX = event.pageX;
    var pageY = event.pageY;

    var map = $('#map');
    var map_width = map.css('width');
    var map_height = map.css('height');
    map_width = Number(map_width.substring(0, map_width.length-2));
    map_height = Number(map_height.substring(0, map_height.length-2));
    map_offset = map.offset();
    map_x = (pageX - map_offset.left) / map_width;
    map_y = (pageY - map_offset.top) / map_height;

    console.log(pageX, pageY);
    console.log(map_offset.left, map_offset.top);
    console.log(map_x, map_y);

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
    
}


$(function () {
    $('#map').click(displayPostion);
});
