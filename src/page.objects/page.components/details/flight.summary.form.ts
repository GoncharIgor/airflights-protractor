import {$, browser, ElementFinder} from 'protractor';

export class FlightSummaryForm {
  public readonly continueToFinalDetailsButton: ElementFinder = $('button[data-testid$="ContinueToPaymentButton"]');

  public async continueToFinalDetails(): Promise<void> {
    await browser.logger.info('Proceeding to payment page');
    await this.continueToFinalDetailsButton.click();
  }
}
