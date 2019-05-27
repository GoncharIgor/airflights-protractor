import {$, browser, by, element, protractor} from "protractor";

import {BasePage} from './base.page';
import {SearchResultAirlinesFilter} from '../components/searc.result/search.result.airlines.filter';
import {SearchResultTable} from '../components/searc.result/search.result.table';

export default class SearchResultPage extends BasePage {
  private modifySearchButton = $('button[data-testid$="FlightSearchResults__ModifySearchButton"]');
  private loadingTextLabel = element(by.xpath('//div[contains(text(),"Getting the best deals from over")]'));
  private searchResultTable: SearchResultTable;
  public searchResultAirlinesFilter: SearchResultAirlinesFilter;

  constructor() {
    super();
    this.searchResultTable = new SearchResultTable();
    this.searchResultAirlinesFilter = new SearchResultAirlinesFilter();

  }

  async waitForResultsToLoad(): Promise<boolean> {
    await this.waitUntilElementVisible(this.modifySearchButton, 30000);
    await this.waitUntilElementNotVisible(this.loadingTextLabel, 30000);
    await browser.logger.info('Page with flights search result was loaded');
    return await this.modifySearchButton.isDisplayed();
  }
}
