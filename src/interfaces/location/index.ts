import { GetQueryInterface } from 'interfaces';

export interface LocationInterface {
  id?: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
  latitude: number;
  longitude: number;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface LocationGetQueryInterface extends GetQueryInterface {
  id?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  zip_code?: string;
}
