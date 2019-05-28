import {$, ElementFinder} from "protractor";

export class ContactDetails {
  private titleDropDown: ElementFinder;
  private firstNameInput: ElementFinder;
  private middleNameInput: ElementFinder;
  private lastNameInput: ElementFinder;
  private emailInput: ElementFinder;
  private phoneCountryCodeInput: ElementFinder;
  private mobilePhoneNumberInput: ElementFinder;

  constructor(rootElement){
    this.titleDropDown = $('select[placeholder="Title"]');
    this.firstNameInput = $('input[data-testid$="FirstNameInput"]');
    this.middleNameInput = $('input[data-testid$="MiddleNameInput"]');
    this.lastNameInput = $('input[data-testid$="LastNameInput"]');
    this.emailInput = $('input[data-testid$="EmailInput"]');
    this.mobilePhoneNumberInput = $('input[data-testid$="MobileNumberInput"]');
    this.phoneCountryCodeInput = $('.react-select__input input');
  }
}
