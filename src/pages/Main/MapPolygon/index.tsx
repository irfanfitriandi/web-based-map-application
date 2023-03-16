import { useState, useEffect, useCallback } from "react";
import maplibregl from "maplibre-gl";

import {
  Map,
  NavigationControl,
  Source,
  Layer,
  FillLayer,
  GeolocateControl,
} from "react-map-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import Search from "components/Search";

import PolygonData from "assets/data/polygon.geojson.json";
import { PolygonType } from "shared/types/PolygonType";

const layerStyle: FillLayer = {
  id: "data",
  type: "fill",
  paint: {
    "fill-color": [
      "interpolate",
      ["linear"],
      ["get", "users"],
      0,
      "#FD9D0D",
      250,
      "#0F9504",
      500,
      "#3BA1FF",
    ],
    "fill-opacity": 0.9,
    "fill-outline-color": "#000000",
  },
};

function MapPolygon() {
  const [polygon, setPolygon] = useState<PolygonType>({});
  const [hoverInfo, setHoverInfo] = useState<any>(null);
  const data: any = { PolygonData };

  useEffect(() => {
    setPolygon(data.PolygonData);
  }, []);

  const onHover = useCallback((e: any) => {
    const {
      features,
      point: { x, y },
    } = e;
    const hoveredFeature = features && features[0];

    setHoverInfo(hoveredFeature && { feature: hoveredFeature, x, y });
  }, []);

  const localSearch = (query: any) => {
    const matchingFeatures = [];
    for (const feature of data.PolygonData.features) {
      if (
        feature.properties.Propinsi.toLowerCase().includes(query.toLowerCase())
      ) {
        feature.place_name = `📍 ${feature.properties.Propinsi}`;
        feature.center = feature.geometry.coordinates;
        matchingFeatures.push(feature);
      }
    }
    return matchingFeatures;
  };

  return (
    <Map
      mapLib={maplibregl}
      initialViewState={{
        longitude: 112.544,
        latitude: 3.316,
        zoom: 4,
      }}
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        left: 0,
        zIndex: 1,
      }}
      mapStyle={`https://api.maptiler.com/maps/streets-v2/style.json?key=${
        import.meta.env.VITE_API_MAPTILER
      }`}
      interactiveLayerIds={["data"]}
      onMouseMove={onHover}
    >
      <Source id="data" type="geojson" data={data.PolygonData}>
        <Layer {...layerStyle} />
      </Source>
      <Search
        mapboxAccessToken={import.meta.env.VITE_API_MAPBOX}
        position="top-right"
        placeholder="Search on map"
        localGeocoder={localSearch}
      />
      <NavigationControl position="bottom-right" />
      <GeolocateControl position="bottom-right" />
      {hoverInfo && (
        <div
          className="absolute m-2 p-2 bg-white rounded-md"
          style={{ left: hoverInfo.x, top: hoverInfo.y }}
        >
          <div>ID: {hoverInfo.feature.properties.ID}</div>
          <div>Propinsi: {hoverInfo.feature.properties.Propinsi}</div>
          <div>Users: {hoverInfo.feature.properties.users}</div>
        </div>
      )}
    </Map>
  );
}

export default MapPolygon;
