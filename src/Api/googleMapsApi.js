import { scriptLoader } from '../utils/scriptLoader';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUWXYZ';
const googleMapsCallback = '$$_callback_$$';
let directionsService;
let directionsDisplay;

export let googleMap;

export const setupMap = (map) => {
    const url = `https://maps.googleapis.com/maps/api/js?key=YAIzaSyDX4kL7w9lQMa81i2kmUQSeUf_IuI6nQ0I&callback=${googleMapsCallback}`;

    return new Promise((resolve, reject) => {
        const onSuccess = () => {
            googleMap = new window.google.maps.Map(map.ref, {
                center: map.center,
                zoom: map.zoom
            });

            directionsService = new window.google.maps.DirectionsService();
            directionsDisplay = new window.google.maps.DirectionsRenderer({ map: googleMap });

            resolve();
        };

        if (window.google && window.google.maps) {
            onSuccess();
            return;
        }

        window[googleMapsCallback] = () => {
            onSuccess();
            delete window[googleMapsCallback];
        };

        scriptLoader(url).catch(reject);
    });
};

export const addMarker = ({ position, index }) => {
    return new window.google.maps.Marker({
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
