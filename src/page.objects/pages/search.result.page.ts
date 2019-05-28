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
    await this.waitUntilElementVisible(this.modifySearchButton, 40000);
    await this.waitUntilElementNotVisible(this.loadingTextLabel, 40000);
    await browser.logger.info('Page with flights search result was loaded');
    return await this.modifySearchButton.isDisplayed();
  }
}
