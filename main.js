$(document).ready(function(){
    $("button").click(function(){
    navigator.geolocation.getCurrentPosition(function(position){
        latitude = position.coords.latitude;
        longtitude = position.coords.longitude;
        $('#whereami').append(latitude + ":" + longtitude);
    })
    });
});


