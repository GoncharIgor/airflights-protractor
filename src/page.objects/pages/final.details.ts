import {$, browser} from 'protractor';
import {BasePage} from './base.page';

export class FinalDetails extends BasePage {
  private readonly confirmBookingButton = $('button.btn.btn-confirm');

  public async isFinalDetailsPageOpened(): Promise<boolean> {
    await this.waitUntilElementVisible(this.confirmBookingButton, 40000);
    await browser.logger.info('Final details page was loaded');
    return await this.confirmBookingButton.isDisplayed();
  }
}
