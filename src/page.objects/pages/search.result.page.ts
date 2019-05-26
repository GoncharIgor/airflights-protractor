import {$, browser, by, element, protractor} from "protractor";

import {BasePage} from './base.page';
import {SearchResultFilter} from '../components/searc.result/search.result.filter';
import {SearchResultTable} from '../components/searc.result/search.result.table';

const EC = protractor.ExpectedConditions;

export default class SearchResultPage extends BasePage {
  private modifySearchButton = $('button[data-testid$="FlightSearchResults__ModifySearchButton"]');
  private loadingTextLabel = element(by.xpath('//div[contains(text(),"Getting the best deals from over")]'));
  private searchResultTable: SearchResultTable;
  public searchResultFilter: SearchResultFilter;

  constructor() {
    super();
    this.searchResultTable = new SearchResultTable();
    this.searchResultFilter = new SearchResultFilter();

  }

  async waitForResultsToLoad(): Promise<boolean> {
    await browser.wait(EC.presenceOf(this.modifySearchButton), 30000);
    //await browser.wait(EC.not(EC.presenceOf(this.loadingTextLabel)), 30000);
    await browser.logger.info('Page with flights search result was loaded');
    return await this.modifySearchButton.isDisplayed();
  }
}
