// map.js

import { apiKey } from './mapconfig.js';

// Initialize the map
window.initMap = function() {
    const scootsLocations = [
        { lat: 20.5125, lng: -86.9475, name: 'Scoots - el Centro de Cozumel' },
        { lat: 20.4518, lng: -86.9931, name: 'Scoots - Terminal Puerta Maya' }
    ];

    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 20.4799, lng: -86.9550 }, // Center of Cozumel
        zoom: 12 // Adjust the zoom level as needed
    });

    // Loop through the locations and add markers
    scootsLocations.forEach(location => {
        new google.maps.marker.AdvancedMarkerElement({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.name
        });
    });
}

// Due to the deprecation warning about Marker, you might want to check if it's available
// and use AdvancedMarkerElement if it's not. You can add this check at the beginning of your script.
if (google.maps.marker) {
    console.warn('google.maps.marker is deprecated. Consider using google.maps.marker.AdvancedMarkerElement instead.');
}

// Load Google Maps API with the imported API key
const script = document.createElement('script');
script.async = true;
script.defer = true;
script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&loading=async`;
document.head.appendChild(script);
