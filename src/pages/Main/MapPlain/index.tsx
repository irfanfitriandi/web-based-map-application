import maplibregl from "maplibre-gl";
import { Map, NavigationControl, Source, Layer, FillLayer } from "react-map-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import Search from "components/Search";

function MapPlain() {
  return (
    <div className="flex justify-end">
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
      >
        <Search
          mapboxAccessToken={import.meta.env.VITE_API_MAPBOX}
          position="top-right"
        />
        <NavigationControl position="bottom-right" />
      </Map>
    </div>
  );
}

export default MapPlain;
