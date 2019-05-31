import * as path from 'path';

import {BasePage} from './base.page';
import {FileHelper} from '../../helpers/file.helper';
import {FlightsSearchForm} from '../page.components/index/flights.search.form';
import {IFlight} from '../../interfaces/IFlight';

export class IndexPage extends BasePage {
  public readonly searchForm: FlightsSearchForm = new FlightsSearchForm();

  public getRandomFlight(): IFlight {
    const testFile = FileHelper.getRandomFileNameInThePath(path.join(__dirname, '../../test.data/flights'));
    return Object.assign(require(`../../test.data/flights/${testFile}`));
  }

  public async searchFlight(flight: IFlight): Promise<void> {
    await this.searchForm.fillSearchForm(flight);
    await this.searchForm.submitForm();
  }
}
