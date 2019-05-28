import {BasePage} from './base.page';
import {FlightsSearchForm} from '../components/index/flights.search.form';
import {IFlight} from '../../interfaces/IFlight';

export class IndexPage extends BasePage {
  public readonly searchForm: FlightsSearchForm = new FlightsSearchForm();

  public async searchFlight(flight: IFlight): Promise<void> {
    await this.searchForm.fillSearchForm(flight);
    await this.searchForm.submitForm();
  }
}
