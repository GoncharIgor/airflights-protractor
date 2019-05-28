import {$, $$, ElementArrayFinder, ElementFinder} from 'protractor';
import {ElementFinderHelper} from '../../../helpers/element.finder.helper';

export class SearchResultTable {
  private readonly flightRowSelector = 'div[data-testid^="FlightSearchResult"] > .row';
  private readonly flightPriceLocator = 'div[data-testid$="PriceLabel"]';
  private readonly selectFlightButtonLocator = 'button';
  private readonly departureAirport = 'div[data-testid$="DepartureAirportLabel"]';
  private readonly originAirport = 'div[data-testid$="ArrivalAirportLabel"]"]';

  private flightRows: ElementArrayFinder;
  private resultsTableHeader: ElementFinder;
  private rootElement: ElementFinder;
  private sortingPriceLink: ElementFinder;

  constructor(rootElement = $('ReactVirtualized__Grid__innerScrollContainer')) {
    this.rootElement = rootElement;
    this.flightRows = rootElement.$$(this.flightRowSelector);
    this.resultsTableHeader = $$('.row .col-9 > div').get(2);
    this.sortingPriceLink = $('a[data-testid^="FlightSearchResult__Sorting__Price"]');
  }

  public async getAllRows() {
    return this.flightRows;
  }

  public async sortPriceAsc() {
    await ElementFinderHelper.scrollToTheElement(this.sortingPriceLink);
    const status = await this.sortingPriceLink.getAttribute('data-testid');
    if (status.endsWith('LowestFirstSelected')) {
      return;
    } else {
      await this.sortingPriceLink.click();
    }
  }

  public async getFlightRowByIndex(index: number): Promise<ElementFinder> {
    return this.flightRows.get(index);
  }

  public async getAllPrices() {
    return await this.rootElement.$$(`${this.flightRowSelector} ${this.flightPriceLocator}`).getText();
  }
}
