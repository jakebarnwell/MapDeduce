
function add_resource_handlers() {
    $(".resource").click(function(e) {
        console.log("clicked!");
        $("#icon-notes-title").text("Notes for " + 3);
        $("#icon-notes").modal('show');
    });
}
