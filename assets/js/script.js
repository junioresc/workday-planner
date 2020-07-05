



$(".description").on("click", "p", function() {
    var taskDescription = $(this)
        .text()
        .trim();

    var taskInput = $("<input>")
        .attr("type", "text")
        .addClass("form-control")
        .val(taskDescription);

    $(this).replaceWith(taskInput);
});