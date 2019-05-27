import IndexPage from '../page.objects/pages/index.page';
import SearchResultPage from '../page.objects/pages/search.result.page';
import {Flight} from "../interfaces/flight";
import {browser} from "protractor";

describe('Flight checkout', () => {
  const indexPage = new IndexPage();
  const searchResultPage = new SearchResultPage();
  const data: Flight = Object.assign(require('../test.data/sydney-doha.flight.json'));

  beforeEach(async () => {
    await browser.manage().deleteAllCookies();
    await indexPage.openPage();
  });

  it('WHEN user searches for flight ' +
    'AND enters valid passenger data ' +
    'THEN final details page is opened', async () => {
    await indexPage.searchFlight(data);
    await searchResultPage.waitForResultsToLoad();
    await searchResultPage.searchResultTable.sortPriceAsc();

  });

  afterEach(async () => {
    // await browser.deleteSession();
  })
});
