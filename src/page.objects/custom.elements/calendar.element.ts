import {$, $$, ElementArrayFinder, ElementFinder} from 'protractor';
import {BaseFragment} from 'protractor-element-extend';

const dateMMFormat = 'MMM DD YYYY';

export class CalendarElement extends BaseFragment {
  private readonly monthWrapperSelector = '.DayPicker-Month';
  private readonly monthDropdownSelector = '.DayPicker-Caption > div > div';
  private readonly activeDatesSelector = '.DayPicker-Month div[aria-disabled=false]';

  private activeDates: ElementArrayFinder;
  private currentMonth: ElementFinder;
  private currentMonthDropdown: ElementFinder;
  private currentYearDropdown: ElementFinder;
  private nextMonth: ElementFinder;
  private rootElement: ElementFinder;

  constructor(rootElement = $('.DayPicker-wrapper')) {
    super(rootElement);
    this.rootElement = rootElement;
    this.activeDates = rootElement.$$(this.activeDatesSelector);
    this.currentMonth = rootElement.$$(this.monthWrapperSelector).get(0);
    this.nextMonth = rootElement.$$(this.monthWrapperSelector).get(1);
    this.currentMonthDropdown = this.currentMonth.$$(this.monthDropdownSelector).get(0);
    this.currentYearDropdown = this.currentMonth.$$(this.monthDropdownSelector).get(1);
  }

  public async selectDate(date): Promise<void> {
    const day = this.rootElement.$$(`${this.activeDatesSelector}[aria-label$="${date}"]`).get(0);
    await day.click();
  }
}
