function initMap() {
  var myLatLng = {lat: 40.7127837, lng: -74.00594130000002};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 16
  });

  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng
  });
}
