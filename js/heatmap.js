var myMap = L.map("map", {
    center: [40.71, -73.94],
    zoom: 11
})

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
}).addTo(myMap)

//Function
function handleSubmit() {
    d3.event.preventDefault();
}
d3.json("data/mapdata.json", (dataFile) => {

    var heatArray = [];

    for (var i = 0; i < dataFile.length; i++) {
        var lat = dataFile[i].LATITUDE
        var lon = dataFile[i].LONGITUDE
        heatArray.push([lat, lon])
    }

    var heat = L.heatLayer(heatArray, {
        radius: 35,
        blur: 15
    }).addTo(myMap);
})