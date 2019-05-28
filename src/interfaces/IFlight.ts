import {IPassengers} from './IPassengers';

export interface IFlight {
  origin: string;
  destination: string;
  fromDate: string;
  toDate: string;
  cabinType: string;
  passengers: IPassengers;
}
