import Layout from "components/Layout";
import MapPlain from "./MapPlain";
import MapPoint from "./MapPoint";
import MapPolygon from "./MapPolygon";

function Main() {
  const path = window.location.pathname;

  return (
    <Layout>
      {path === "/" ? (
        <MapPlain />
      ) : path === "/active-layer/point" ? (
        <MapPoint />
      ) : (
        <MapPolygon />
      )}
    </Layout>
  );
}

export default Main;
