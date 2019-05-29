import {$, ElementFinder} from 'protractor';

export class FlightSummaryForm {
  public readonly continueToFinalDetailsButton: ElementFinder = $('button[data-testid$="ContinueToPaymentButton"]');

  public async continueToFinalDetails(): Promise<void> {
    await this.continueToFinalDetailsButton.click();
  }
}
