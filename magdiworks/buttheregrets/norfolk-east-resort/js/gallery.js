$(document).ready(function()
{
    $(".gallery-image").on("click", function()
    {
        $(".view-box").animate({
            "opacity": "1.0"
        }, 500);
        $(".view-box").css("display", "block");
    });

    $(".thumbnail").on("click", function(){
        var largeImage = $(this).attr("src");
        $(".largeImage").attr({
            src: largeImage
        });
    });

    $(".view-box").on("click", function(){
        closeBox();
    });

    function closeBox(){
        $(".view-box").animate({
            "opacity": "0"
        }, 350, function(){
            $(".view-box").css("display", "none");
        });
    }
});