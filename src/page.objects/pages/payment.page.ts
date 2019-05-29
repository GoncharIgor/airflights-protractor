import {$$, browser} from 'protractor';

import {BasePage} from './base.page';
import {ContactDetailsFrom} from '../page.components/details/contact.details.from';
import {FlightSummaryForm} from '../page.components/details/flight.summary.form';
import {IPassengerDetails} from '../../interfaces/IPassenger.details';
import {PassangerDetailsForm} from '../page.components/details/passanger.details.form';

export class PaymentPage extends BasePage {
  private readonly passengerDetailsLocator = '.card-body > div[data-testid^="FlightPAX"]';

  private flightSummaryForm: FlightSummaryForm;
  private contactDetailsFrom: ContactDetailsFrom;

  constructor() {
    super();
    this.flightSummaryForm = new FlightSummaryForm();
    this.contactDetailsFrom = new ContactDetailsFrom($$('.card .card-body').last());
  }

  public async fillPassengerDetailsForm(passengerDetails: IPassengerDetails[]) {
    await this.asyncForEach(passengerDetails, async (detail, index) => {
      const passengerDetailsForm = await new PassangerDetailsForm($$(this.passengerDetailsLocator).get(index));

      await passengerDetailsForm.selectPassengerTitle(detail.title);
      await passengerDetailsForm.setPassengerFirstName(detail.firstName);
      await passengerDetailsForm.setPassengerLastName(detail.lastName);
    });
  }

  public async fillPassengerContacts(passengerDetails: IPassengerDetails) {
    await this.contactDetailsFrom.selectPassengerTitle(passengerDetails.title);
    await this.contactDetailsFrom.setPassengerFirstName(passengerDetails.firstName);
    await this.contactDetailsFrom.setPassengerLastName(passengerDetails.lastName);
    await this.contactDetailsFrom.setPassengerEmail(passengerDetails.email);
    await this.contactDetailsFrom.setPhoneNumber(passengerDetails.phoneNumber);
  }

  public async proceedToFinalDetails(): Promise<void> {
    await this.flightSummaryForm.continueToFinalDetails();
  }

  public async waitForDetailsToLoad(): Promise<boolean> {
    await this.waitUntilElementVisible(this.flightSummaryForm.continueToFinalDetailsButton, 40000);
    await browser.logger.info('Page with passenger details was loaded');
    return await this.flightSummaryForm.continueToFinalDetailsButton.isDisplayed();
  }

  private async asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }
}
