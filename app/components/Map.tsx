'use client';

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

//@ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src
});

interface MapProps {
    center?: L.LatLngExpression;
}

const Map: React.FC<MapProps> = ({ center }) => {
    const centerCoords: L.LatLngExpression = center || [28.7041, 77.1025]; // Default to Delhi if no center is passed
    const mapRef = useRef<HTMLDivElement | null>(null);
    const mapInstance = useRef<L.Map | null>(null); // Ref to hold the map instance
    const markerRef = useRef<L.Marker | null>(null); // Ref to hold the marker instance

    useEffect(() => {
        if (mapRef.current && !mapInstance.current) {
            // Initialize the map only if it hasn't been initialized yet
            mapInstance.current = L.map(mapRef.current).setView(centerCoords, center ? 6:4);

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mapInstance.current);
        }

        if (mapInstance.current && center) {
            if (markerRef.current) {
                // If the marker exists, update its position
                markerRef.current.setLatLng(center);
            } else {
                // Otherwise, create a new marker
                markerRef.current = L.marker(center).addTo(mapInstance.current);
            }
        }

        // Cleanup: remove marker and map instance when component unmounts or center changes
        return () => {
            if (mapInstance.current) {
                if (markerRef.current) {
                    mapInstance.current.removeLayer(markerRef.current);
                }
                mapInstance.current.remove();
                mapInstance.current = null;
            }
        };
    }, [center]);

    return <div ref={mapRef} style={{ height: '35vh', borderRadius: '8px' }}></div>;
};

export default Map;
