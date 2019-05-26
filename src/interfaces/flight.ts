import {Passengers} from "./passengers";

export interface Flight {
  origin: string;
  destination: string;
  fromDate: string;
  toDate: string;
  cabinType: string;
  passengers: Passengers
}
