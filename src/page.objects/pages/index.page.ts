import {IFlight} from '../../interfaces/IFlight';
import {FlightsSearchForm} from '../components/index/flights.search.form';
import {BasePage} from './base.page';

export default class IndexPage extends BasePage {
  public readonly searchForm: FlightsSearchForm = new FlightsSearchForm();

  public async searchFlight(flight: IFlight): Promise<void> {
    await this.searchForm.fillSearchForm(flight);
    await this.searchForm.submitForm();
  }
}
