import {$, ElementFinder} from 'protractor';

export class FlightSummaryForm {
  private continueToFInalDetailsButton: ElementFinder = $('button[data-testid$="ContinueToPaymentButton"]');
}
