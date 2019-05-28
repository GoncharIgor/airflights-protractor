import {$, ElementFinder} from "protractor";

export class PassangerDetails {
  private titleDropDown: ElementFinder;
  private firstNameInput: ElementFinder;
  private middleNameInput: ElementFinder;
  private lastNameInput: ElementFinder;

  constructor(rootElement){
    this.titleDropDown = $('select[placeholder="Title"]');
    this.firstNameInput = $('input[data-testid$="FirstNameInput"]');
    this.middleNameInput = $('input[data-testid$="MiddleNameInput"]');
    this.lastNameInput = $('input[data-testid$="LastNameInput"]');
  }
}
