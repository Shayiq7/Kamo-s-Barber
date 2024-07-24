

// Map initialization code
function initMap() {
    // The location of the barbershop
    const barbershopLocation = { lat: 51.557804107666016, lng: -0.3352603614330292 };
    
    // Create a map centered at the barbershop location
    const map = new google.maps.Map(document.getElementById('map-container'), {
        zoom: 14,
        center: barbershopLocation
    });
    
    // Place a marker at the barbershop location
    const marker = new google.maps.Marker({
        position: barbershopLocation,
        map: map,
        title: "My location"
    });
}

// Initialize the map when the window loads
window.onload = initMap;
