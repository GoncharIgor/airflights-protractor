import {$, ElementFinder} from 'protractor';

export class FlightSummaryForm {
  private continueToFinalDetailsButton: ElementFinder = $('button[data-testid$="ContinueToPaymentButton"]');

  public async continueToFinalDetails(): Promise<void> {
    await this.continueToFinalDetailsButton.click();
  }
}
