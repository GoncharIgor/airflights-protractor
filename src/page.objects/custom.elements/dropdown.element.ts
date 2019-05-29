import {$$, by, element} from 'protractor';
import {BaseFragment} from 'protractor-element-extend';

export class DropDown extends BaseFragment {
  constructor(rootElement, optOptionElementName) {
    super(rootElement);
    this.dropdown = rootElement;
    this.optionElement = optOptionElementName || 'a';
    this.openStateLocator = `.dropdown.open ${this.optionElement}`;
  }

  public async selectOption(optionName): Promise<void> {
    const optionLocator = await element(by.cssContainingText(this.openStateLocator, optionName));
    await optionLocator.click();
  }

  public async selectOptionByIndex(index): Promise<void> {
    const optionLocator = $$(this.openStateLocator).get(index);
    await optionLocator.click();
  }

  public async getText(): Promise<string> {
    return await this.dropdown.getText();
  }

  public async isAvailableOption(optionName): Promise<boolean> {
    const optionLocator = element(by.cssContainingText(this.openStateLocator, optionName));
    return await optionLocator.isPresent();
  }
}
