import {BasePage} from './base.page';
import {FlightsSearchForm} from '../components/index/flights.search.form';
import {Flight} from "../../interfaces/flight";

export default class IndexPage extends BasePage {
  public searchForm: FlightsSearchForm;

  constructor() {
    super();
    this.searchForm = new FlightsSearchForm();
  }

  public async searchFlight(flight: Flight): Promise<void> {
    await this.searchForm.fillSearchForm(flight);
    await this.searchForm.submitForm();
  }
}
