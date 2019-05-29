import {$$, by, element, ElementFinder} from 'protractor';
import {BaseFragment} from 'protractor-element-extend';

export class DropDown extends BaseFragment {
  constructor(rootElement: ElementFinder, optOptionElementName?: string) {
    super(rootElement);
    this.dropdown = rootElement.element(by.xpath('../..'));
    this.optionElement = optOptionElementName || 'ul li';
  }

  public async openDropDown() {
    await this.dropdown.click();
  }

  public async selectOption(optionName): Promise<void> {
    const optionLocator = await this.dropdown.element(by.cssContainingText(this.optionElement, optionName));
    await optionLocator.click();
  }

  public async selectOptionByIndex(index): Promise<void> {
    const optionLocator = this.dropdown.$$(this.openStateLocator).get(index);
    await optionLocator.click();
  }

  public async getText(): Promise<string> {
    return await this.dropdown.getText();
  }

  public async isAvailableOption(optionName): Promise<boolean> {
    const optionLocator = await this.dropdown.element(by.cssContainingText(this.optionElement, optionName));
    return await optionLocator.isPresent();
  }
}
