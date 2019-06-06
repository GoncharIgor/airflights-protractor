import {$, $$, ElementArrayFinder, ElementFinder} from 'protractor';
import {BaseFragment} from 'protractor-element-extend';
import {DropDown} from './dropdown.element';

const dateMMFormat = 'MMM DD YYYY';

export class CalendarElement extends BaseFragment {
  private readonly activeMonthsSelector = 'option:not([disabled])';
  private readonly monthWrapperSelector = '.DayPicker-Month';
  private readonly monthDropdownSelector = '.DayPicker-Caption > div > div > select';
  private readonly activeDatesSelector = '.DayPicker-Month div[aria-disabled=false]';

  private activeDates: ElementArrayFinder;
  private currentMonth: ElementFinder;
  private currentMonthDropdown: DropDown;
  private currentYearDropdown: ElementFinder;
  private nextMonth: ElementFinder;
  private rootElement: ElementFinder;

  constructor(rootElement = $('.DayPicker-wrapper')) {
    super(rootElement);
    this.rootElement = rootElement;
    this.activeDates = rootElement.$$(this.activeDatesSelector);
    this.currentMonth = rootElement.$$(this.monthWrapperSelector).get(0);
    this.nextMonth = rootElement.$$(this.monthWrapperSelector).get(1);
    this.currentMonthDropdown = new DropDown(this.currentMonth.$$(this.monthDropdownSelector).get(0), 'option', '..');
    this.currentYearDropdown = new DropDown(this.currentMonth.$$(this.monthDropdownSelector).get(1), 'option', '..');
  }

  public async selectDate(date): Promise<void> {
    const day = this.rootElement.$$(`${this.activeDatesSelector}[aria-label$="${date}"]`).get(0);
    await day.click();
  }

  public async getActiveMonths() {
    await this.currentMonthDropdown.open();
    return await this.currentMonthDropdown.$$(this.activeMonthsSelector).getText();
  }
}
