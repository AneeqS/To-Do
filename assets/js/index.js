$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").on("keypress", function (event){
    if(event.which === 13){
        var userText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + userText + "</li>");

    }
});

$(".fa-plus-square").on("click", function () {
    $("input[type='text']").fadeToggle();
});

