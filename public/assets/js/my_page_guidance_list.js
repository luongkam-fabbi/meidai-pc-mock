$(document).ready(function () {
    $('.btn-back').click(function () {
        $('.content').css('display', 'block');
        $(this).css('display', 'none');
        $('section.detail-content').css('display', 'none');
    });

    $('#hover .content').each(function () {
        $(this).click(function () {
            $('.btn-back').css('display', 'flex');
            $('.content').css('display', 'none');
            $('section.detail-content').css('display', 'block');
            $(this).css('display', 'block');
        })
    });
});

function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 44.540, lng: -78.546},
        zoom: 8
    });
}
