import {$, browser, by, element} from 'protractor';

import {SearchResultAirlinesFilter} from '../components/searc.result/search.result.airlines.filter';
import {SearchResultTable} from '../components/searc.result/search.result.table';
import {BasePage} from './base.page';

export default class SearchResultPage extends BasePage {
  public readonly searchResultTable: SearchResultTable = new SearchResultTable();
  public readonly searchResultAirlinesFilter: SearchResultAirlinesFilter = new SearchResultAirlinesFilter();

  private readonly modifySearchButton = $('button[data-testid$="FlightSearchResults__ModifySearchButton"]');
  private readonly loadingTextLabel = element(by.xpath('//div[contains(text(),"Getting the best deals from over")]'));

  public async waitForResultsToLoad(): Promise<boolean> {
    await this.waitUntilElementVisible(this.modifySearchButton, 30000);
    await this.waitUntilElementNotVisible(this.loadingTextLabel, 30000);
    await browser.logger.info('Page with flights search result was loaded');
    return await this.modifySearchButton.isDisplayed();
  }

  public async filterByCarrier(carrierName: string) {
    await browser.logger.info('Filter search results by carrier:', carrierName);
    await this.searchResultAirlinesFilter.selectCarrierOrigin(carrierName);
  }

  public async selectFlight(index: number) {
    await browser.logger.info('Selecting flight by index:', index);
    await this.searchResultTable.selectFlightByIndex(index);
  }
}
