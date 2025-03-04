'use client';

import React from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
} from 'react-leaflet';

// stylesheet imports
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';


const Leaflet = () => {
  return (
    <MapContainer
      style={{ height: "100%", width: "90%" }}
      center={[42.95539, -85.63196]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[42.95539, -85.63196]}>
        <Tooltip permanent>
          Eastown Hookah Lounge <br />
          1522 Wealthy St SE <br />
          Grand Rapids, MI 49506
        </Tooltip>
      </Marker>
    </MapContainer>
  );
};

export default Leaflet;