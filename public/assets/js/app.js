$(function() {
    $("#devourIt").on("click", event => {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newEats");

        var newEatenState = {
            sleepy: newDevoured
        }
        console.log(newDevoured);
    

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(function() {
                console.log("Burger devoured");
                location.reload();
            });
    });

    $(".create-burger").on("submit", event => {
        event.preventDefault();

        var newBurger = {
            name: $("#newBurger").val().trim()
        }
        $.ajax("api/cats", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("New burger added");
            location.reload;
        });
    });
});