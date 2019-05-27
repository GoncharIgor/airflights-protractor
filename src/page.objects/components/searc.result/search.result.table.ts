import {Flight} from "../../../interfaces/flight";
import {$, $$, ElementArrayFinder, ElementFinder} from "protractor";

export class SearchResultTable {
  private readonly flightRowSelector = 'div[data-testid^="FlightSearchResult"] > .row';

  private flightRows: ElementArrayFinder;
  private resultsTableHeader: ElementFinder;
  private rootElement: ElementFinder;
  private sortingPriceLink: ElementFinder;
  //HighestFirstSelected
  //LowestFirstSelected

  constructor(rootElement = $('ReactVirtualized__Grid__innerScrollContainer')) {
    this.sortingPriceLink = $('a[data-testid^="FlightSearchResult__Sorting__Price"]');
    this.resultsTableHeader = $$('.row .col-9 > div').get(2);
    this.rootElement = rootElement;
    this.flightRows = rootElement.$$(this.flightRowSelector);
  }

  public async getAllRows() {

  }

  public async getRowData() {

  }

  public async sortPriceAsc() {
    let status;
    status = await this.sortingPriceLink.getText();
    if (status.endsWith('LowestFirstSelected')) {
      return;
    } else {
      await this.sortingPriceLink.click();
    }
  }

  public async compareRowData(expectedData: Flight, actualRowData) {

  }

  private async getFlightRowByIndex(index: number): Promise<ElementFinder> {
    return this.flightRows.get(index);
  }
}
