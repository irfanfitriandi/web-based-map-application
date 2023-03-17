import { useState, useEffect } from "react";
import maplibregl from "maplibre-gl";

import {
  Map,
  NavigationControl,
  GeolocateControl,
  Marker,
  Popup,
} from "react-map-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import Search from "components/Search";

import PointData from "assets/data/marker.geojson.json";
import { PointFeaturesType, PointType } from "shared/types/PointType";
import { getMarker } from "./utils";

function MapPoint() {
  const [point, setPoint] = useState<PointType | any>({});
  const [popup, setPopup] = useState<any>(null);

  useEffect(() => {
    setPoint(PointData);
  }, []);

  const localSearch = (query: string) => {
    const matchingFeatures = [];
    for (const feature of point) {
      if (
        feature.properties.project_id
          .toLowerCase()
          .includes(query.toLowerCase())
      ) {
        feature.place_name = `${feature.properties.project_id}`;
        feature.center = feature.geometry.coordinates;
        matchingFeatures.push(feature);
      }
    }
    return matchingFeatures;
  };

  return (
    <div className="flex justify-end">
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: 106.9574,
          latitude: -6.5889,
          zoom: 8,
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
      >
        {point.features?.map((data: PointFeaturesType, idx: number) => {
          const lng = data.geometry?.coordinates[0];
          const lat = data.geometry?.coordinates[1];
          const { status } = data.properties;
          const marker = getMarker(status);

          return (
            <Marker
              key={idx}
              longitude={lng}
              latitude={lat}
              anchor="bottom"
              onClick={(e) => {
                e.originalEvent.stopPropagation();
                setPopup(data);
              }}
              style={{ cursor: "pointer" }}
            >
              <img src={marker} />
            </Marker>
          );
        })}
        {popup && (
          <Popup
            anchor="top"
            longitude={Number(popup.geometry?.coordinates[0])}
            latitude={Number(popup.geometry?.coordinates[1])}
            onClose={() => setPopup(null)}
          >
            <p>Project ID: {popup.properties.project_id}</p>
            <p>Status: {popup.properties.status}</p>
          </Popup>
        )}
        <Search
          mapboxAccessToken={import.meta.env.VITE_API_MAPBOX}
          position="top-right"
          localGeocoder={localSearch}
          localGeocoderOnly={true}
        />
        <NavigationControl position="bottom-right" />
        <GeolocateControl position="bottom-right" />
      </Map>
    </div>
  );
}

export default MapPoint;
