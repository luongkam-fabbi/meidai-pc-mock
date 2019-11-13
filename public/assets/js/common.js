$(document).ready(function () {
    const elmScrollTop = '#up-to-top';

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(elmScrollTop).fadeIn();
        } else {
            $(elmScrollTop).fadeOut();
        }
    });

    $(elmScrollTop).click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});
// function moreLoad() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         moreText.style.display = "inline";
//     }
// }
$(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 100;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "続きを読む &nbsp;";
    var moreimage = "assets/images/extend.png";
    var lessimage = "assets/images/extend2.png";
    var lesstext = "隠す &nbsp;";
    
    $('.more').each(function() {
        var content = $(this).html();
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + 
            '</span>&nbsp;&nbsp;<a href="#" class="extend morelink"><p>'+ moretext +'</p><img src='+ moreimage +'></a></span>';
            $(this).html(html);
        }
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(".morelink p").html(moretext);
            $(".morelink img").attr("src", moreimage);
        } else {
            $(this).addClass("less");
            $(".morelink p").html(lesstext);
            $(".morelink img").attr("src", lessimage);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});