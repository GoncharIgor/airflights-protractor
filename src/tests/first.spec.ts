import IndexPage from '../page.objects/pages/index.page';
import SearchResultPage from '../page.objects/pages/search.result.page';
import {Flight} from "../interfaces/flight";
import {browser} from "protractor";

describe('INDEX page', () => {
  const indexPage = new IndexPage();
  const searchResultPage = new SearchResultPage();
  const data: Flight = Object.assign(require('../test.data/sydney-doha.flight.json'));

  beforeEach(async () => {
    await browser.manage().deleteAllCookies();
    await indexPage.openPage();
  });

  it('should have the right title', async () => {
    await indexPage.searchFlight(data);
    await searchResultPage.waitForResultsToLoad();
    await searchResultPage.searchResultAirlinesFilter.checkCarrierIsPresentInOriginList('AF: Air France');
  });

  afterEach(async () => {
    // await browser.deleteSession();
  })
});
