import Layout from "../../components/Layout";
import MapPoint from "./MapPoint";
import MapPolygon from "./MapPolygon";

const ActiveLayer = () => {
  const path = window.location.pathname;

  return (
    <Layout>
      {path === "/active-layer/point" ? <MapPoint /> : <MapPolygon />}
    </Layout>
  );
};

export default ActiveLayer;
