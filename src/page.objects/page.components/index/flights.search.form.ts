import {$, browser, ElementFinder, protractor} from 'protractor';

import {IFlight} from '../../../interfaces/IFlight';
import {CalendarElement} from '../../custom.elements/calendar.element';
import {PassengersAmountForm} from './passengers.amount.form';

export class FlightsSearchForm {
  public calendar: CalendarElement;
  public passengersAmountForm: PassengersAmountForm;
  private readonly cabinTypeDropDown: ElementFinder;
  private readonly destinationInputField: ElementFinder;
  private readonly fromCalendarIcon: ElementFinder;
  private readonly originInputField: ElementFinder;
  private readonly passengersAmountDropDown: ElementFinder;
  private readonly roundTripButton: ElementFinder;
  private readonly submitButton: ElementFinder;
  private readonly toCalendarIcon: ElementFinder;

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
    await this.originInputField.clear();
    await this.originInputField.sendKeys(text);
    await this.originInputField.sendKeys(protractor.Key.ENTER);
    await browser.logger.info('Flight origin was set to:', text);
  }

  public async setDestination(text: string): Promise<void> {
    await this.destinationInputField.clear();
    await this.destinationInputField.sendKeys(text);
    await this.destinationInputField.sendKeys(protractor.Key.ENTER);
    await browser.logger.info('Flight origin was set to:', text);
  }

  public async setFromDate(date: string): Promise<void> {
    await this.openCalendar(this.fromCalendarIcon);
    await this.calendar.selectDate(date);
    await browser.logger.info('From date was set to:', date);
  }

  public async setToDate(date: string): Promise<void> {
    await this.openCalendar(this.toCalendarIcon);
    await this.calendar.selectDate(date);
    await browser.logger.info('End date was set to:', date);

  }

  public async setPassengers(passengers): Promise<void> {
    await this.passengersAmountDropDown.click();
    await this.passengersAmountForm.setPassengers(passengers);
    await browser.logger.info(`Passengers were set in amount of: ${passengers.amount}`);
  }

  public async selectCabinType(type: string): Promise<void> {
    await this.cabinTypeDropDown.click();
    await browser.logger.info('Cabin type was selected:', type);
  }

  public async submitForm(): Promise<void> {
    await browser.logger.info('Search flight form was submitted');
    await this.submitButton.click();
  }

  public async selectRoundTrip(): Promise<void> {
    await this.roundTripButton.click();
    await browser.logger.info('Round trip option was selected');
  }

  public async fillSearchForm(flight: IFlight): Promise<void> {
    await this.selectRoundTrip();
    await this.setDestination(flight.destination);
    await this.setOrigin(flight.origin);
    await this.setFromDate(flight.fromDate);
    await this.setToDate(flight.toDate);
    await this.setPassengers(flight.passengers);
  }

  public async openCalendar(elem: ElementFinder): Promise<void> {
    await elem.click();
  }
}
