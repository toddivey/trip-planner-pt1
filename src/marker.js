const mapboxgl = require("mapbox-gl");



// var marker = new mapboxgl.Marker()
//   .setLngLat([-87.6354, 41.8885])
//   .addTo(map);

function makeMarker(long, lat) {
    let marker = document.createElement('div')
    marker.style.width = "32px"
    marker.style.height = "39px"
    marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png"
    return new mapboxgl.Marker(marker)
        .setLngLat([long, lat])
        // .addTo(map);
}

module.exports = makeMarker;