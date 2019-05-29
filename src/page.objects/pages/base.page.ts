import {$, browser, ElementFinder, protractor} from 'protractor';

import {ElementFinderHelper} from '../../helpers/element.finder.helper';
import {FileHelper} from '../../helpers/file.helper';

export abstract class BasePage {

  public async openPage(path?: string | undefined): Promise<void> {
    await browser.get(path ? browser.params.baseUrl + path : browser.params.baseUrl);
  }

  public async getPageTitle(): Promise<string> {
    return await browser.getTitle();
  }

  public async refreshPage(): Promise<void> {
    await browser.refresh();
  }

  public async waitUntilElementVisible(elem: ElementFinder, timeout = 5000): Promise<void> {
    await ElementFinderHelper.waitUntilElementVisible(elem, timeout);
  }

  public async waitUntilElementNotVisible(elem: ElementFinder, timeout = 5000): Promise<void> {
    await ElementFinderHelper.waitUntilElementNotVisible(elem, timeout);
  }

  public async hitEnter(): Promise<void> {
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }

  public async clickTab(): Promise<void> {
    await $('body').sendKeys(protractor.Key.TAB);
  }

  public async exportDataToCsv(data: any, fileName: string): Promise<void> {
    await FileHelper.writeFile(data, fileName);
  }
}
