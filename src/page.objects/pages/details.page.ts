import {BasePage} from './base.page';
import {IPassengerDetails} from "../../interfaces/IPassenger.details";
import {FlightSummaryForm} from "../page.components/details/flight.summary.form";
import {PassangerDetailsForm} from "../page.components/details/passanger.details.form";

export class DetailsPage extends BasePage {
  private readonly passengerDetailsLocator = '.card-body > div[data-testid^="FlightPAX"]'; //$$
  private flightSummaryForm = new FlightSummaryForm();

  public async fillPassengersInfo(passengerDetails: IPassengerDetails[]) {

  }

  public async fillPassengerContacts(passengerDetails: IPassengerDetails) {

  }

  public async proceedToFinalDetails(): Promise<void> {
    await this.flightSummaryForm.continueToFinalDetails();
  }
}
