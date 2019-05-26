import {$$, browser, by, element} from "protractor";

const BaseFragment = require('./base.fragment').BaseFragment;

export class DropDown extends BaseFragment {
  constructor(rootElement, optOptionElementName) {
    super(rootElement);
    this.dropdown = rootElement;
    this.optionElement = optOptionElementName || 'a';
    this.openStateLocator = `.dropdown.open ${this.optionElement}`;
  }

  async selectOption(optionName) {
    const optionLocator = await element(by.cssContainingText(this.openStateLocator, optionName));
    await optionLocator.click();
  }

  async selectOptionByIndex(index) {
    const optionLocator = $$(this.openStateLocator).get(index);
    await optionLocator.click();
  }

  async getText() {
    return await this.dropdown.getText();
  }

  async isAvailableOption(optionName) {
    const optionLocator = element(by.cssContainingText(this.openStateLocator, optionName));
    return await optionLocator.isPresent();
  }
}
