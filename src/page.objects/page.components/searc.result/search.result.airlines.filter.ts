import {$$, by, element, ElementArrayFinder, ElementFinder} from 'protractor';

import {ArrayHelper} from '../../../helpers/array.helper';
import {ElementFinderHelper} from '../../../helpers/element.finder.helper';

export class SearchResultAirlinesFilter {
  public readonly EMIRATES_CARRIER_NAME = 'EK: Emirates';
  public readonly carriersOriginListSelector = '//*[@id="root"]/div[3]/div[1]/div[2]/div/div[7]/div[2]/div[2]//label';

  private rootElement: ElementFinder;
  private carriersOriginList: ElementArrayFinder;
  private carriersOriginExpandLink: ElementFinder;

  constructor(rootElement = element(by.xpath('//*[@id="root"]/div[3]/div[1]/div[2]/div/div[7]'))) {
    this.rootElement = rootElement;
    this.carriersOriginList = element.all(by.xpath(this.carriersOriginListSelector));
    this.carriersOriginExpandLink = rootElement.element(by.xpath('div[2]/div[2]//a'));
  }

  public async selectCarrierOrigin(carrierName: string) {
    const optionLocator =
      await element(by.xpath((`${this.carriersOriginListSelector}[contains(text(),"${carrierName}")]`)));
    await optionLocator.click();
  }

  public async checkCarrierIsPresentInOriginList(carrierName: string) {
    await this.expandCarriersOriginList();
    const carriersList = await this.getAllCarriersOriginList();
    return carriersList.includes(carrierName);
  }

  public async getRandomCarrier() {
    const carriersList = await this.getAllCarriersOriginList();
    return ArrayHelper.getRandomValueFromArray(carriersList);
  }

  public async getAllCarriersOriginList() {
    await this.expandCarriersOriginList();
    return await this.carriersOriginList.getText();
  }

  private async expandCarriersOriginList(): Promise<void> {
    const isCarrierListAlreadyExpanded = await this.checkCarriersOriginListIsExpanded();
    if (!isCarrierListAlreadyExpanded) {
      await ElementFinderHelper.waitUntilElementVisible(this.carriersOriginExpandLink, 10000);
      await ElementFinderHelper.scrollToTheElement(this.rootElement);
      await this.carriersOriginExpandLink.click();
    }
  }

  private async checkCarriersOriginListIsExpanded(): Promise<boolean> {
    const linkText = await this.carriersOriginExpandLink.getText();
    return linkText.startsWith('Show less');
  }
}
