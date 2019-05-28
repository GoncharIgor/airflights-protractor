import {browser, ElementFinder, protractor} from 'protractor';

const EC = protractor.ExpectedConditions;

export class ElementFinderHelper {

  public static async waitUntilElementVisible(elem: ElementFinder, timeout = 5000): Promise<void> {
    await browser.wait(EC.presenceOf(elem), timeout);
    try {
      return await browser.wait(EC.visibilityOf(elem), timeout);
    } catch (e) {
      browser.logger.error(`[Not visible] element ${elem} is not visible`);
    }
  }

  public static async waitUntilElementNotVisible(elem: ElementFinder, timeout = 5000): Promise<void> {
    try {
      return await browser.wait(EC.not(EC.visibilityOf(elem)), timeout);
    } catch (e) {
      browser.logger.error(`[Visible] element ${elem} is visible`);
    }
  }

  public static async waitUntilElementIsClickable(elem: ElementFinder, timeout = 5000): Promise<void> {
    try {
      return await browser.wait(EC.elementToBeClickable(elem), timeout);
    } catch (e) {
      browser.logger.error(`[Not clickable] element ${elem} is not clickable`);
    }
  }

  public static async getCssValueOfElement(element, value): Promise<string> {
    return await element.getCssValue(value);
  }

  public static async scrollToTheElement(element: ElementFinder): Promise<void> {
    await browser.executeScript('arguments[0].scrollIntoView();', element.getWebElement());
  }

  public static async highlightElement(el: ElementFinder): Promise<void> {
    await browser.driver.executeScript('arguments[0].setAttribute(\'style\', arguments[1]);',
      el.getWebElement(), 'color: Red; border: 2px solid red;');
  }
}
