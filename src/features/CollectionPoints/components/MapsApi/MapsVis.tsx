import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Box, IconButton } from "@mui/material";
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    useMap,
} from '@vis.gl/react-google-maps';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import type { Marker } from '@googlemaps/markerclusterer';

import { apiMaps } from "../../../../config/apiConfig";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

type Poi = { key: string, location: google.maps.LatLngLiteral }

const positions = {
    center: { lat: -19.922736, lng: -43.945174 },
    arena: { position: { lat: -19.930649, lng: -44.017283 } },
    pampulha: { position: { lat: -19.859532, lng: -43.978412 } },
}

const locations: Poi[] = [
    { key: 'ArenaMRV', location: { lat: -19.930649, lng: -44.017283 } },
    { key: 'lagoaPampulha', location: { lat: -19.859532, lng: -43.978412 } },
    { key: 'teste', location: { lat: -19.930700, lng: -44.017100 } },
    { key: 'GetulioVargas', location: { lat: -19.931437516284927, lng: -43.924446460681274 } },
    { key: 'AnneFrank', location: { lat: -19.866965956190555, lng: -44.02021881671581 } },
    { key: 'AeroportoPampulha', location: { lat: -19.849505702691, lng: -43.954995020344114 } },
    { key: 'ItauShopping', location: { lat: -19.943670950307183, lng: -44.022093160801184 } },
    { key: 'HospitalBaleia', location: { lat: -19.924144388566248, lng: -43.89815364761249 } },
    { key: 'DelReyShopping', location: { lat: -19.88621401020439, lng: -43.968534811611605 } },
    { key: 'SoMarcas', location: { lat: -19.95012548137899, lng: -44.02277980665751 } },
];

const PoiMarkers = (props: { pois: Poi[] }) => {
    const map = useMap();
    const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
    const clusterer = useRef<MarkerClusterer | null>(null);

    useEffect(() => {
        if (!map) return;
        if (!clusterer.current) {
            clusterer.current = new MarkerClusterer({ map });
        }
    }, [map]);

    useEffect(() => {
        clusterer.current?.clearMarkers();
        clusterer.current?.addMarkers(Object.values(markers));
    }, [markers]);

    const setMarkerRef = (marker: Marker | null, key: string) => {
        if (marker && markers[key]) return;
        if (!marker && !markers[key]) return;

        setMarkers(prev => {
            if (marker) {
                return { ...prev, [key]: marker };
            } else {
                const newMarkers = { ...prev };
                delete newMarkers[key];
                return newMarkers;
            }
        });
    };

    const handleClick = useCallback((ev: google.maps.MapMouseEvent) => {
        if (!map) return;
        if (!ev.latLng) return;
        console.log('marker clicked:', ev.latLng.toString());
        map.panTo(ev.latLng);
    }, []);

    return (
        <>
            {props.pois.map((poi: Poi) => (
                <AdvancedMarker
                    key={poi.key}
                    position={poi.location}
                    ref={marker => setMarkerRef(marker, poi.key)}
                    clickable={true}
                    onClick={handleClick}
                >
                    <Pin background={'#006400'} glyphColor={'#F2F2F2'} borderColor={'#000'} />
                </AdvancedMarker>
            ))}
        </>
    );
};

export default function MapsVis() {
    const navigate = useNavigate();

    return (
        <Box sx={{ height: '90vh', width: '45vh' }}>
            <IconButton sx={{ alignSelf: "end" }} onClick={() => navigate(-1)}>
                <KeyboardBackspaceIcon />
            </IconButton>
            <APIProvider apiKey={apiMaps.key} onLoad={() => console.log('Maps API has loaded.')}>
                <Map
                    mapId='f79bb56232e2fbda'
                    defaultZoom={10}
                    defaultCenter={positions.center}
                >
                    <PoiMarkers pois={locations} />
                </Map>
            </APIProvider>
        </Box>
    );
};