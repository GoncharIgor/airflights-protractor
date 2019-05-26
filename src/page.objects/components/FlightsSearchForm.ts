import {$, by, ElementFinder, protractor} from 'protractor';
import {Flight} from "../../interfaces/Flight";
import {Calendar} from "./common/calendar";
import {PassengersAmountForm} from "./passengers.amount.form";

export class FlightsSearchForm {
  private originInputField: ElementFinder;
  private destinationInputField: ElementFinder;
  private fromCalendar: ElementFinder;
  private toCalendar: ElementFinder;
  private cabinTypeDropDown: ElementFinder;
  private passengersAmountDropDown: ElementFinder;
  private submitButton: ElementFinder;
  private roundTripButton: ElementFinder;
  public calendar: Calendar;
  public passengersAmountForm: PassengersAmountForm;

  //public constructor(rootElement = $('div[data-testid$="RoundTripButton"]').element(by.xpath('/ancestor::node()[5]'))) {
  public constructor(rootElement = $('.container + div div .container')) {
    this.originInputField = rootElement.$('input[placeholder="Origin"]');
    this.destinationInputField = rootElement.$('input[placeholder="Destination"]');
    this.fromCalendar = $('div[data-testid$="FromDateButton"]');
    this.toCalendar = $('div[data-testid$="ToDateButton"]');
    this.cabinTypeDropDown = $('div[data-testid$="CabinTypeDropdown"]');
    this.passengersAmountDropDown = $('div[data-testid$="PaxDropdown"]');
    this.submitButton = $('button[data-testid$="SearchButton"]');
    this.roundTripButton = rootElement.$('div[data-testid$="RoundTripButton"]');
    this.calendar = new Calendar();
    this.passengersAmountForm = new PassengersAmountForm();
  }

  public async setOrigin(text: string) {
    await this.originInputField.sendKeys(text);
    await this.originInputField.sendKeys(protractor.Key.ENTER);
  }

  public async setDestination(text: string) {
    await this.destinationInputField.sendKeys(text);
    await this.destinationInputField.sendKeys(protractor.Key.ENTER);
  }

  public async setFromDate(date: string) {
    await this.fromCalendar.click();
    await this.calendar.selectDate(date)
  }

  public async setToDate(date: string) {
    await this.toCalendar.click();
    await this.calendar.selectDate(date)

  }

  public async setNumberOfPassangers(amount: number) {
    await this.passengersAmountDropDown.click();
    await this.passengersAmountForm.setAmountOfAdults(amount);
  }

  public async selectCabinType(type: string) {
    await this.cabinTypeDropDown.click();
  }

  public async submitForm() {
    await this.submitButton.click();
  }

  public async selectRoundTrip() {
    await this.roundTripButton.click();
  }

  public async fillSearchForm(flight: Flight) {
    await this.selectRoundTrip();
    await this.setOrigin(flight.origin);
    await this.setDestination(flight.destination);
    await this.setFromDate(flight.fromDate);
    await this.setToDate(flight.toDate);
    await this.setNumberOfPassangers(flight.passengersAmount);
    await this.submitForm();
  }
}
