import {BasePage} from './base.page';
import {FlightsSearchForm} from '../components/index/flights.search.form';

export default class IndexPage extends BasePage {
  public searchForm: FlightsSearchForm;

  constructor() {
    super();
    this.searchForm = new FlightsSearchForm();
  }
}
