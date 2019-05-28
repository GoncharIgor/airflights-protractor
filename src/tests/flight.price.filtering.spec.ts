import {browser} from 'protractor';

import {IFlight} from '../interfaces/IFlight';
import {IndexPage} from '../page.objects/pages/index.page';
import {SearchResultPage} from '../page.objects/pages/search.result.page';
import {ArrayHelper} from '../helpers/array.helper';

const indexPage = new IndexPage();
const searchResultPage = new SearchResultPage();

describe('SEARCH RESULTS: prices filtering', () => {
  const data: IFlight = Object.assign(require('../test.data/sydney-doha.flight.json'));
  let flightsPrices;

  beforeAll(async () => {
    await browser.manage().deleteAllCookies();
    await indexPage.openPage();
    await indexPage.searchFlight(data);
    await searchResultPage.waitForResultsToLoad();
  });

  it('WHEN user searches for any flight ' +
    'AND clicks "price sorting" link on search results page ' +
    'THEN flights are sorted per price in ascending order', async () => {
    await searchResultPage.searchResultTable.sortPriceAsc();
    flightsPrices = await searchResultPage.searchResultTable.getAllPrices();
    console.log(flightsPrices);
    expect(ArrayHelper.checkArrayIsSortedAsc(flightsPrices)).toBe(true,
      'Prices are not sorted in ascending order');
  });

  afterAll(async () => {
    await searchResultPage.exportDataToCsv(flightsPrices, 'flightsPricesAsc.csv');
  })
});
