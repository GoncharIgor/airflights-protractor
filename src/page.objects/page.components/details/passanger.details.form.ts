import {$, browser, ElementFinder} from 'protractor';
import {DropDown} from '../../custom.elements/dropdown.element';

export class PassangerDetailsForm {
  private titleDropDown: DropDown;
  private firstNameInput: ElementFinder;
  private middleNameInput: ElementFinder;
  private lastNameInput: ElementFinder;

  constructor(rootElement) {
    this.titleDropDown = new DropDown(rootElement.$('select[placeholder="Title"]'));
    this.firstNameInput = rootElement.$('input[data-testid$="FirstNameInput"]');
    this.middleNameInput = rootElement.$('input[data-testid$="MiddleNameInput"]');
    this.lastNameInput = rootElement.$('input[data-testid$="LastNameInput"]');
  }

  public async selectPassengerTitle(title: string) {
    await this.titleDropDown.open();
    await this.titleDropDown.selectOption(title);
    await browser.logger.info('Passenger title was set to:', title);
  }

  public async setPassengerFirstName(firstName: string) {
    await this.firstNameInput.sendKeys(firstName);
    await browser.logger.info('Passenger first name was set to:', firstName);
  }

  public async setPassengerLastName(lastName: string) {
    await this.lastNameInput.sendKeys(lastName);
    await browser.logger.info('Passenger last name was set to:', lastName);
  }
}
