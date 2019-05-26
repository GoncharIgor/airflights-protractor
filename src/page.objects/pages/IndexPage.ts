import {BasePage} from './BasePage';
import {FlightsSearchForm} from '../components/FlightsSearchForm';

export default class IndexPage extends BasePage {
  public searchForm: FlightsSearchForm;

  constructor() {
    super();
    this.searchForm = new FlightsSearchForm();
  }
}
