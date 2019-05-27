import {$$, browser, by, element, ElementArrayFinder, ElementFinder} from "protractor";
import {ElementFinderHelper} from '../../../helpers/element.finder.helper';

export class SearchResultAirlinesFilter {
  public readonly EMIRATES_CARRIER_NAME = 'EK: Emirates';

  private rootElement: ElementFinder;
  private carriersOriginList: ElementArrayFinder;
  private carriersOriginExpandLink: ElementFinder;

  constructor(rootElement = element(by.xpath('//*[@id="root"]/div[3]/div[1]/div[2]/div/div[7]'))) {
    this.rootElement = rootElement;
    this.carriersOriginList = element.all(by.xpath('//*[@id="root"]/div[3]/div[1]/div[2]/div/div[7]/div[2]/div[2]//label'));
    this.carriersOriginExpandLink = rootElement.element(by.xpath('div[2]/div[2]//a'));
  }

  public async expandCarriersOriginList(): Promise<void> {
    const isCarrierListAlreadyExpanded = await this.checkCarriersOriginListIsExpanded();
    if (!isCarrierListAlreadyExpanded) {
      await ElementFinderHelper.waitUntilElementVisible(this.carriersOriginExpandLink, 10000);
      await ElementFinderHelper.scrollToTheElement(this.rootElement);
      await this.carriersOriginExpandLink.click();
    }
  }

  public async checkCarrierIsPresentInOriginList(carrierName: string) {
    await this.expandCarriersOriginList();
    const carriersList = await this.getAllCarriersOriginList();
    console.log(carriersList);
    const res = carriersList.includes(carrierName);
    console.log(res);
  }

  private async checkCarriersOriginListIsExpanded(): Promise<boolean> {
    const linkText = await this.carriersOriginExpandLink.getText();
    return linkText.startsWith('Show less');
  }

  private async getAllCarriersOriginList() {
    return await this.carriersOriginList.getText();
  }

  public async selectCarrierOrigin(carrierName: string) {
    // const optionLocator = element(by.cssContainingText(this.openStateLocator, optionName));
    // return await optionLocator.isPresent();
  }
}
