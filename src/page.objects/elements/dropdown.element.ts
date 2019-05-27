import {$$, browser, by, element} from "protractor";
import {BaseFragment} from 'protractor-element-extend';

export class DropDown extends BaseFragment {
  constructor(rootElement, optOptionElementName) {
    super(rootElement);
    this.dropdown = rootElement;
    this.optionElement = optOptionElementName || 'a';
    this.openStateLocator = `.dropdown.open ${this.optionElement}`;
  }

  async selectOption(optionName): Promise<void> {
    const optionLocator = await element(by.cssContainingText(this.openStateLocator, optionName));
    await optionLocator.click();
  }

  async selectOptionByIndex(index): Promise<void> {
    const optionLocator = $$(this.openStateLocator).get(index);
    await optionLocator.click();
  }

  async getText(): Promise<string> {
    return await this.dropdown.getText();
  }

  async isAvailableOption(optionName): Promise<boolean> {
    const optionLocator = element(by.cssContainingText(this.openStateLocator, optionName));
    return await optionLocator.isPresent();
  }
}
