import maplibregl from "maplibre-gl";
import { Map, NavigationControl, Source, Layer, FillLayer } from "react-map-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import Polygon from "../../assets/data/polygon.json";

const data: any = { Polygon };

const layerStyle: FillLayer = {
  id: "data",
  type: "fill",
  paint: {
    "fill-color": {
      property: "percentile",
      stops: [
        [0, "#3288bd"],
        [1, "#66c2a5"],
        [2, "#abdda4"],
        [3, "#e6f598"],
        [4, "#ffffbf"],
        [5, "#fee08b"],
        [6, "#fdae61"],
        [7, "#f46d43"],
        [8, "#d53e4f"],
      ],
    },
    "fill-opacity": 0.8,
  },
};

const MapComp = () => {
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
          width: "calc(100vw - 208px)",
          height: "100vh",
          position: "fixed",
        }}
        mapStyle={`https://api.maptiler.com/maps/streets-v2/style.json?key=${
          import.meta.env.VITE_API
        }`}
      >
        <Source type="geojson" data={data}>
          <Layer {...layerStyle} />
        </Source>
        <NavigationControl position="bottom-right" />
      </Map>
    </div>
  );
};

export default MapComp;
