import {$, $$, browser, by, ElementArrayFinder, ElementFinder} from "protractor";

const dateMMFormat = 'MMM DD YYYY';
const formattedDateRegEx = /^(\D{3})\/(\d{1,2})\/(\d{4})$/;

export class CalendarElement {
  private  calendarField: ElementFinder;
  private  currentMonth: ElementFinder;
  private  nextMonth: ElementFinder;
  private  activeDates: ElementArrayFinder;
  private activeDatesSelector = '.DayPicker-Month div[aria-disabled=false]';

  constructor(rootElement = $('.DayPicker-wrapper')) {
    this.calendarField = rootElement;
    this.currentMonth = $$('.DayPicker-Month').get(0);
    this.nextMonth = $$('.DayPicker-Month').get(1);
    this.activeDates = $$(this.activeDatesSelector)
  }

  async selectDate(activeDate) {
    const day = $$(`${this.activeDatesSelector}[aria-label$="${activeDate}"]`).get(0);
    await day.click();
  }
}
