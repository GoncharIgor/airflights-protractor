import {$, by, ElementFinder, protractor} from 'protractor';

export class PassengersAmountForm {
  private adultsRow: ElementFinder;
  private childrenRow: ElementFinder;
  private infantsRow: ElementFinder;
  private rootELement: ElementFinder;
  private readonly minusButtonSelector = 'MinusButton';
  private readonly passengersCountSelector = 'CountLabel';
  private readonly plusButtonSelector = 'PlusButton';

  public constructor(rootElement = $('.FlightSearchBox__PaxCounterMenu')) {
    this.rootELement = rootElement;
    this.adultsRow = rootElement.$('> div:nth-child(1)');
    this.childrenRow = rootElement.$('> div:nth-child(1)');
    this.infantsRow = rootElement.$('> div:nth-child(1)');
  }

  public async setAmountOfAdults(amount: number) {
    for (let i = 1; i < amount; i++) {
      await this.rootELement.$('div[data-testid$="AdultsPlusButton"]').click();
    }
    const amountRes = await this.rootELement.$('div[data-testid$="CountLabel"]').getText();
    console.log(amountRes);
  }
}
