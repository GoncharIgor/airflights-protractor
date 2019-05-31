import {browser} from 'protractor';
import {ArrayHelper} from '../helpers/array.helper';

import {IndexPage} from '../page.objects/pages/index.page';
import {SearchResultPage} from '../page.objects/pages/search.result.page';

const indexPage = new IndexPage();
const searchResultPage = new SearchResultPage();

describe('SEARCH RESULTS: carrier filtering', () => {
  const flight = indexPage.getRandomFlight();

  beforeAll(async () => {
    await browser.manage().deleteAllCookies();
    await indexPage.openPage();
    await indexPage.searchFlight(flight);
    await searchResultPage.waitForResultsToLoad();
  });

  it('WHEN user searches for any flight ' +
    'AND filters search result by particular carrier ' +
    'THEN only flights for selected carrier are displayed', async () => {
    await searchResultPage.searchResultAirlinesFilter.getAllCarriersOriginList();
    await searchResultPage.searchResultAirlinesFilter.checkCarrierIsPresentInOriginList(searchResultPage.searchResultAirlinesFilter.EMIRATES_CARRIER_NAME);

    const randomCarrier = await searchResultPage.searchResultAirlinesFilter.getRandomCarrier();
    await searchResultPage.searchResultAirlinesFilter.selectCarrierOrigin(randomCarrier);
    const carriersList = await searchResultPage.searchResultTable.getAllCarriers();

    expect(ArrayHelper.arrayHasTheOnlyValues(carriersList, randomCarrier.substr(4))).toBe(true,
      'Search results contain flights not only for selected carrier');
  });
});
