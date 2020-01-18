$(function() {
    $(".devourIt").on("click", event => {
        event.preventDefault();
        var btnValue = $("#eatBtn").val();

        var newDevoured = 1;

        var newEatenState = {
            devoured: newDevoured
        }    

        $.ajax("/api/burgers/" + btnValue, {
            type: "PUT",
            data: newEatenState
        }).then(function() {
                console.log("Burger devoured");
                location.reload();
            });
    });

    $(".create-form").on("submit", event => {
        event.preventDefault();
       
        var newBurger = {
            burger_name: $("#newBurger").val().trim(),
            devoured: 0
        }

        $.ajax("api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("New burger added");
            location.reload();
        });
    });
});