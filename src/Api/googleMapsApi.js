const alphabet = 'ABCDEFGHIJKLMNOPQRSTUWXYZ';
let directionsService;
let directionsDisplay;

export let googleMap;

export const setupMap = (map) => {
    googleMap = new window.googleMaps.Map(map.ref, {
        center: map.center,
        zoom: map.zoom
    });

    directionsService = new window.google.maps.DirectionsService();
    directionsDisplay = new window.google.maps.DirectionsRenderer({ map: googleMap });

    return googleMap;
};

export const addMarker = ({ position, index }) => {
    return new window.googleMaps.Marker({
        position,
        label: alphabet[index % alphabet.length],
        map: googleMap
    });
};

export const showSteps = (response, route) => {
    const steps = response.routes[0].legs[0].steps;
    let index = 0;

    for (const step of steps) {
        const marker = route.markers[index];
        marker.setPosition(step.start_location);
        index += 1;
    }
};

export const createRoute = (route) => {
    return new Promise((resolve, reject) => {
        directionsService.route({
            origin: route.startPoint.position,
            destination: route.endPoint.position,
            travelMode: 'WALKING'
        }, (response, status) => {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
                showSteps(response, route)
                resolve(response);
            } else {
                reject(status);
            }
        });
    });
};
