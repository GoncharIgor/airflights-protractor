import {$, $$, browser, ElementArrayFinder, ElementFinder, promise} from 'protractor';

import {ElementFinderHelper} from '../../../helpers/element.finder.helper';

export class SearchResultTable {
  private readonly flightRowSelector = 'div[data-testid^="FlightSearchResult"] > .row';
  private readonly flightPriceLocator = 'div[data-testid$="PriceLabel"]';
  private readonly departureAirport = 'div[data-testid$="DepartureAirportLabel"]';
  private readonly originAirport = 'div[data-testid$="ArrivalAirportLabel"]"]';

  private flightRows: ElementArrayFinder;
  private resultsTableHeader: ElementFinder;
  private sortingPriceLink: ElementFinder;

  constructor() {
    this.flightRows = $$(this.flightRowSelector);
    this.resultsTableHeader = $$('.row .col-9 > div').get(2);
    this.sortingPriceLink = $('a[data-testid^="FlightSearchResult__Sorting__Price"]');
  }

  public async sortPriceAsc() {
    await browser.logger.info('Prices were sorted ASC');
    await ElementFinderHelper.waitUntilElementVisible(this.sortingPriceLink);
    await ElementFinderHelper.scrollToTheElement(this.sortingPriceLink);
    const status = await this.sortingPriceLink.getAttribute('data-testid');
    if (status.endsWith('LowestFirstSelected')) {
      return;
    } else {
      return await this.sortingPriceLink.click();
    }
  }

  public async getFlightRowByIndex(index: number): Promise<ElementFinder> {
    return this.flightRows.get(index);
  }

  public async selectFlightByIndex(index: number) {
    await $$(`${this.flightRowSelector} button`).get(index).click();
  }

  public async getAllPrices(): Promise<any> {
    const prices: any = await $$(`${this.flightRowSelector} ${this.flightPriceLocator}`).getText();
    prices.forEach((e, index, arr) => {
      arr[index] = e.replace(',', '');
    });
    return prices;
  }
}
