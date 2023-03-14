export interface PointType {
  PointData: {
    type: string;
    features: {
      type: string;
      properties: {
        status: string;
        project_id: string;
      };
      geometry: {
        coordinates: number[];
        type: string;
      };
    }[];
  };
}
