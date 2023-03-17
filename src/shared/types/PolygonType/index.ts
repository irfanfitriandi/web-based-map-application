export interface PolygonType {
  features?: {
    geometry?: {
      type?: string;
      coordinates?: number[][][][];
    };
    properties?: {
      ID?: number;
      kode?: number;
      Propinsi?: string;
      SUMBER?: string;
      users?: number;
    };
    type?: string;
    id?: undefined;
  }[];
  type?: string;
}

export interface HoverPolyType {
  feature?: {
    properties: {
      ID?: number;
      kode?: number;
      Propinsi?: string;
      SUMBER?: string;
      users?: number;
    };
  };
  x?: number;
  y?: number;
}
