import { ReservationInterface } from 'interfaces/reservation';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface TableInterface {
  id?: string;
  number: number;
  capacity: number;
  location: string;
  availability: boolean;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;
  reservation?: ReservationInterface[];
  restaurant?: RestaurantInterface;
  _count?: {
    reservation?: number;
  };
}

export interface TableGetQueryInterface extends GetQueryInterface {
  id?: string;
  location?: string;
  restaurant_id?: string;
}
