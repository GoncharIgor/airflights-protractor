import {$, by, ElementFinder, protractor} from 'protractor';
import {IPassengers} from '../../../interfaces/IPassengers';

export class PassengersAmountForm {
  private readonly countLabelSelector = 'div[data-testid$="CountLabel"]';

  private adultsRow: ElementFinder;
  private childrenRow: ElementFinder;
  private infantsRow: ElementFinder;
  private rootELement: ElementFinder;

  public constructor(rootElement = $('.FlightSearchBox__PaxCounterMenu')) {
    this.rootELement = rootElement;
    this.adultsRow = rootElement.$('> div:nth-child(1)');
    this.childrenRow = rootElement.$('> div:nth-child(2)');
    this.infantsRow = rootElement.$('> div:nth-child(3)');
  }

  public async setPassengers(passengers: IPassengers): Promise<void> {
    for (let i = 1; i < passengers.amount; i++) {
      await this.rootELement.$(`div[data-testid$="${passengers.category}PlusButton"]`).click();
    }
  }
}
