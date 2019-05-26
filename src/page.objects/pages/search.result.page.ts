import {BasePage} from './base.page';
import {$, browser, protractor} from "protractor";

const EC = protractor.ExpectedConditions;


export default class SearchResultPage extends BasePage {
  private modifySearchButton = $('button[data-testid$="FlightSearchResults__ModifySearchButton"]');

  constructor() {
    super();
  }

  async waitForResultsToLoad() {
    await browser.wait(EC.presenceOf(this.modifySearchButton), 30000);
    browser.logger.info('Page with flights search result was loaded');
    return await this.modifySearchButton.isDisplayed();
  }
}
