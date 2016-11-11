L.mapbox.accessToken = 'pk.eyJ1Ijoicm9zZWtxIiwiYSI6ImNpdmNhb3JrNzAwNWwyenBmMDN1a2g0NXAifQ.Cx7hjZVb009fCALAGxO6ng';
var map = L.mapbox.map('map', 'mapbox.streets')
    .setView([54.607868, -5.926437], 14);



//add some GeoJson
function basementDweller(feature, layer){
  var popupOptions = {width: 200};
  var popupContent = "This is some content";
var marker = new L.icon({iconUrl: "lib/leaflet/images/marker-icon-2x.png"});

//layer.bindPopup(popupContent, popupOptions);
layer.setIcon(marker);

};

L.geoJson(playgrounds, {
	onEachFeature: basementDweller
}).addTo(map);

// var popup = L.popup();

// function onMapClick(e, playgrounds) {
//     popup
    
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }

// map.on('click', onMapClick);