//
// var True = False;
//
// $(icon.portal).click(function() {
//
// });

$(function () {
    loadMapTransition(7, 1);
    $('#change_button').click(loadMapEvent);
    $("#up-button").click(function() {
    	loadMapTransition(currentBldg, currentFloor+1);
    });
    $("#down-button").click(function() {
    	loadMapTransition(currentBldg, currentFloor-1);
    });
});
