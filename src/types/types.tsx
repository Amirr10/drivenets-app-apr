type Coordinates = {
  latitude: number;
  longitude: number;
};

type BaseRouter = {
  id: string;
  name: string;
  type: 'enterprise' | 'home' | 'wifi';
  createdAt: string;
  updatedAt: string;
  coordinates: Coordinates;
};

export type EnterpriseRouter = BaseRouter & {
  type: 'enterprise';
  portCount: number;
  supportedProtocols: string[];
  throughputGbps: number;
};

export type HomeRouter = BaseRouter & {
  type: 'home';
  connectedDevices: number;
  parentalControlsEnabled: boolean;
  maxBandwidthMbps: number;
};

export type WifiRouter = BaseRouter & {
  type: 'wifi';
  wifiChannels: number[];
  supportsDualBand: boolean;
};

export type Router = EnterpriseRouter | HomeRouter | WifiRouter;
