import {ElementFinder} from "protractor";

export class FlightRow {
  private selectFlightButton: ElementFinder;
  private price: ElementFinder;
  private originAirport: ElementFinder;
  private departureAirport: ElementFinder;

  constructor(rootElement) {
    this.selectFlightButton = rootElement.$('button');
    this.price = rootElement.$('div[data-testid$="PriceLabel"]');
    this.departureAirport = rootElement.$('div[data-testid$="DepartureAirportLabel"]');
    this.originAirport = rootElement.$('div[data-testid$="ArrivalAirportLabel"]"]');
  }

  public async selectFight(): Promise<void> {
    await this.selectFlightButton.click();
  }

  public async getPrice(){

  }
}
