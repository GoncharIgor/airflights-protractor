import {$, browser, ElementFinder} from 'protractor';
import {DropDown} from '../../custom.elements/dropdown.element';

export class ContactDetailsFrom {
  private titleDropDown: ElementFinder;
  private firstNameInput: ElementFinder;
  private middleNameInput: ElementFinder;
  private lastNameInput: ElementFinder;
  private emailInput: ElementFinder;
  private phoneCountryCodeInput: ElementFinder;
  private mobilePhoneNumberInput: ElementFinder;

  constructor(rootElement) {
    this.titleDropDown = new DropDown(rootElement.$('select[placeholder="Title"]'));
    this.firstNameInput = rootElement.$('input[data-testid$="FirstNameInput"]');
    this.middleNameInput = rootElement.$('input[data-testid$="MiddleNameInput"]');
    this.lastNameInput = rootElement.$('input[data-testid$="LastNameInput"]');
    this.emailInput = rootElement.$('input[data-testid$="EmailInput"]');
    this.mobilePhoneNumberInput = rootElement.$('input[data-testid$="MobileNumberInput"]');
    this.phoneCountryCodeInput = rootElement.$('.react-select__input input');
  }

  public async selectPassengerTitle(title: string) {
    await this.titleDropDown.openDropDown();
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

  public async setPassengerEmail(email: string) {
    await this.emailInput.sendKeys(email);
    await browser.logger.info('Passenger email was set to:', email);
  }

  public async setPhoneNumber(phoneNumber: string) {
    await this.phoneCountryCodeInput.sendKeys(phoneNumber.substring(0, 4));
    await this.mobilePhoneNumberInput.sendKeys(phoneNumber.substring(4, 13));
    await browser.logger.info('Passenger phone number was set to:', phoneNumber);
  }
}
