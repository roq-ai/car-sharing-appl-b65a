import { GetQueryInterface } from 'interfaces';

export interface VehicleTypeInterface {
  id?: string;
  max_speed?: number;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface VehicleTypeGetQueryInterface extends GetQueryInterface {
  id?: string;
}
