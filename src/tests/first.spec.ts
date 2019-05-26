import IndexPage from '../page.objects/pages/index.page';
import SearchResultPage from '../page.objects/pages/search.result.page';
import {Flight} from "../interfaces/flight";
import {browser} from "protractor";

describe('INDEX page', () => {
  const indexPage = new IndexPage();
  const searchResultPage = new SearchResultPage();
  // const flight: Flight =
  const data: Flight = Object.assign(require('../test.data/kyiv-barcelona.flight.json'));

  beforeEach(async () => {
    await browser.manage().deleteAllCookies();
    await indexPage.openPage();
  });

  it('should have the right title', async () => {
    await indexPage.searchForm.fillSearchForm(data);
    await searchResultPage.waitForResultsToLoad();
  });

  afterEach(async () => {
    // await browser.deleteSession();
  })
});
