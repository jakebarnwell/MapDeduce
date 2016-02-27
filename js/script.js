//
// var True = False;
//
// $(icon.portal).click(function() {
//
// });

$(function () {
    loadMapTransition(7, 1);
    $('#change_button').click(loadMapEvent);
    $("#floor_input").keypress(function(e) {
		if(e.which === 13) {
 			e.preventDefault();
 			$("#change_button").click();
 		}
    });
    $("#up-button").click(function() {
    	loadMapTransition(currentBldg, currentFloor+1);
    });
    $("#down-button").click(function() {
    	loadMapTransition(currentBldg, currentFloor-1);
    });
});
