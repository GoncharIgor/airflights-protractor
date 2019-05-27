import {$$, browser, by, element, ElementArrayFinder, ElementFinder} from "protractor";
import {ElementFinderHelper} from '../../../helpers/element.finder.helper';

export class SearchResultFilter {
  public readonly EMIRATES_CARRIER_NAME = 'EK: Emirates';

  private carriersDepartureCityList: ElementArrayFinder;
  private carriersDepartureCityListExpandLink: ElementFinder;

  constructor(rootElement = element(by.xpath('//*[@id="root"]/div[3]/div[1]/div[2]/div/div[7]'))) {
    this.carriersDepartureCityList = rootElement.$$('label');
    this.carriersDepartureCityListExpandLink = rootElement.$('a');
  }

  public async expandDepartureCarriersList(): Promise<void> {
    await ElementFinderHelper.waitUntilElementVisible(this.carriersDepartureCityListExpandLink, 10000);
    await ElementFinderHelper.highlightElement(this.carriersDepartureCityListExpandLink);
    await browser.sleep(5000);
    await this.carriersDepartureCityListExpandLink.click();
  }

  public async checkCarrierIsPresentInTheList(carrierName: string) {
    await this.expandDepartureCarriersList();
    const carriersList = await this.carriersDepartureCityList.getText();
    console.log(carriersList);
    const res = carriersList.includes(carrierName);
    console.log(res);
  }

  public async selectCarrier(carrierName: string) {
    // const optionLocator = element(by.cssContainingText(this.openStateLocator, optionName));
    // return await optionLocator.isPresent();
  }
}
