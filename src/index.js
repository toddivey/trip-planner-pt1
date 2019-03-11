console.log('inside the index.js file!')

const mapboxgl = require("mapbox-gl");
const makeMarker = require('./marker')

mapboxgl.accessToken = 'pk.eyJ1IjoibHAxMjk1IiwiYSI6ImNqdDRpcXdjMTAxYzU0NG41NTRyZXc5azgifQ.G7Rdj2ku418YXCNx69OHqg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

//let mapElement = document.getElementById('map')
map.on('click', function(e) {
    console.log(e.lngLat)
    let latitude = e.lngLat.lat
    let longitude = e.lngLat.lng
    let x = makeMarker(longitude, latitude)
    console.log(x)
})


//I made a change!
