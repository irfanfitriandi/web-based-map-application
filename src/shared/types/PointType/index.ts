export interface PointType {
  type?: string;
  features?: PointFeaturesType;
}

export interface PointFeaturesType {
  type?: string;
  properties: {
    status: string;
    project_id?: string;
  };
  geometry?: {
    coordinates: number[];
    type?: string;
  };
}
[];

export enum PointStatus {
  done = "done",
  ongoing = "ongoing",
  cancelled = "cancelled",
}
