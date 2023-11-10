import { GetQueryInterface } from 'interfaces';

export interface VarebilInterface {
  id?: string;
  mileage?: string;
  varebil_varebil?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface VarebilGetQueryInterface extends GetQueryInterface {
  id?: string;
  mileage?: string;
  varebil_varebil?: string;
}
