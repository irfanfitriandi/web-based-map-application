import { PointStatus } from "shared/types/PointType";
import MarkerGreen from "assets/marker-green.png";
import MarkerYellow from "assets/marker-yellow.png";
import MarkerRed from "assets/marker-red.png";

export const getMarker = (status: PointStatus | any) => {
  switch (status) {
    case PointStatus.done:
      return MarkerGreen;
    case PointStatus.ongoing:
      return MarkerYellow;
    case PointStatus.cancelled:
      return MarkerRed;
  }
};
