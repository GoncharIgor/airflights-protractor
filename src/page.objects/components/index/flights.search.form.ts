import {$, ElementFinder, protractor} from 'protractor';
import {CalendarElement} from "../../elements/calendar.element";
import {Flight} from "../../../interfaces/flight";
import {PassengersAmountForm} from "./passengers.amount.form";

export class FlightsSearchForm {
  private cabinTypeDropDown: ElementFinder;
  private destinationInputField: ElementFinder;
  private fromCalendarIcon: ElementFinder;
  private originInputField: ElementFinder;
  private passengersAmountDropDown: ElementFinder;
  private roundTripButton: ElementFinder;
  private submitButton: ElementFinder;
  private toCalendarIcon: ElementFinder;
  public calendar: CalendarElement;
  public passengersAmountForm: PassengersAmountForm;

  public constructor(rootElement = $('.container + div div .container')) {
    this.cabinTypeDropDown = $('div[data-testid$="CabinTypeDropdown"]');
    this.calendar = new CalendarElement();
    this.destinationInputField = rootElement.$('input[placeholder="Destination"]');
    this.fromCalendarIcon = $('div[data-testid$="FromDateButton"]');
    this.originInputField = rootElement.$('input[placeholder="Origin"]');
    this.passengersAmountDropDown = $('div[data-testid$="PaxDropdown"]');
    this.passengersAmountForm = new PassengersAmountForm();
    this.roundTripButton = rootElement.$('div[data-testid$="RoundTripButton"]');
    this.submitButton = $('button[data-testid$="SearchButton"]');
    this.toCalendarIcon = $('div[data-testid$="ToDateButton"]');
  }

  public async setOrigin(text: string): Promise<void> {
    await this.originInputField.sendKeys(text);
    await this.originInputField.sendKeys(protractor.Key.ENTER);
  }

  public async setDestination(text: string): Promise<void> {
    await this.destinationInputField.sendKeys(text);
    await this.destinationInputField.sendKeys(protractor.Key.ENTER);
  }

  public async setFromDate(date: string): Promise<void> {
    await this.fromCalendarIcon.click();
    await this.calendar.selectDate(date)
  }

  public async setToDate(date: string): Promise<void> {
    await this.toCalendarIcon.click();
    await this.calendar.selectDate(date)

  }

  public async setPassengers(passengers): Promise<void> {
    await this.passengersAmountDropDown.click();
    await this.passengersAmountForm.setPassengers(passengers);
  }

  public async selectCabinType(type: string): Promise<void> {
    await this.cabinTypeDropDown.click();
  }

  public async submitForm(): Promise<void> {
    await this.submitButton.click();
  }

  public async selectRoundTrip(): Promise<void> {
    await this.roundTripButton.click();
  }

  public async fillSearchForm(flight: Flight): Promise<void> {
    await this.selectRoundTrip();
    await this.setOrigin(flight.origin);
    await this.setDestination(flight.destination);
    await this.setFromDate(flight.fromDate);
    await this.setToDate(flight.toDate);
    await this.setPassengers(flight.passengers);
  }
}
