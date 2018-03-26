
$(document).ready(function () {
//background color change function
    $(".themeChanger-set li a").on("click", function () {
        var colr = $(this).data("color");
        $("body").css("background", colr);
        $("#changeDiv").css("color", colr);
    });
});