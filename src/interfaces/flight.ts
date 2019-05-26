export interface Flight {
  origin: string;
  destination: string;
  fromDate: string;
  toDate: string;
  cabinType: string;
  passengers: {
    category: string,
    amount: number
  }
}
