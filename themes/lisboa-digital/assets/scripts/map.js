import "leaflet";

// Leaflet Configurations
var defaultOSM = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
var wikimediaOSM = "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png";
var attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
var lisbonCoordinates = [38.744, -9.158];
var locationPin = L.icon({
  iconUrl: "../../images/location-pin-outlined.svg",
  iconSize: [34, 48],
  iconAnchor: [17, 48],
  popupAnchor: [0, -48],
});

// Initiate Map with a default View
var map = L.map("map").setView(lisbonCoordinates, 13);

// Set Leaflet Tile Layer
L.tileLayer(wikimediaOSM, { attribution: attribution }).addTo(map);

// Get Locations from DOM
var locations = document.querySelectorAll(".location");

// Add Locations
var locationsGroup = L.featureGroup();

locations.forEach(function (location) {
  var lat = location.getAttribute("data-latitude");
  var lng = location.getAttribute("data-longitude");

  locationsGroup.addLayer(
    L.marker()
    .setLatLng([lat, lng])
    .setIcon(locationPin)
    .addTo(map)
    .bindPopup(
      L.popup({ maxWidth: 220, closeButton: false })
        .setLatLng([lat, lng])
        .setContent(location.innerHTML)
    )
  );
});

// Align Map with Markers
map.fitBounds(locationsGroup.getBounds(), {padding: [50, 50], maxZoom: 13});

// Open Popup on first Marker
locationsGroup.getLayers()[0].openPopup();
