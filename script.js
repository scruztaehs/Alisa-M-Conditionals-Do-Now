$("button").click(function() {
    var response = $("input").val();
    if (response === "albany"){
        $(".codenation-background").text("Correct!");
    }
    console.log(response);

});