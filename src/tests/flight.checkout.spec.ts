import {browser} from 'protractor';

import {IFlight} from '../interfaces/IFlight';
import {IPassengerDetails} from '../interfaces/IPassenger.details';
import {IndexPage} from '../page.objects/pages/index.page';
import {SearchResultPage} from '../page.objects/pages/search.result.page';
import {PaymentPage} from '../page.objects/pages/payment.page';
import {FinalDetails} from '../page.objects/pages/final.details';

const indexPage = new IndexPage();
const searchResultPage = new SearchResultPage();
const detailsPage = new PaymentPage();
const finalDetails = new FinalDetails();

describe('FLIGHT CHECKOUT: full checkout flow', () => {
  const data: IFlight = Object.assign(require('../test.data/flights/kyiv-amsterdam.flight.json'));
  const passengersDetails: IPassengerDetails[] = Object.assign(require('../test.data/passengers/igor.bob.json'));

  beforeAll(async () => {
    await browser.manage().deleteAllCookies();
    await indexPage.openPage();
  });

  it('WHEN user searches for any flight ' +
    'AND selects the first one ' +
    'AND proceeds with passengers details ' +
    'THEN payment page is opened', async () => {
    await indexPage.searchFlight(data);
    await searchResultPage.waitForResultsToLoad();
    await searchResultPage.selectFlight(0);
    await detailsPage.waitForDetailsToLoad();
    await detailsPage.fillPassengerDetailsForm(passengersDetails);
    await detailsPage.fillPassengerContacts(passengersDetails[0]);
    await detailsPage.proceedToFinalDetails();

    await expect(finalDetails.isFinalDetailsPageOpened()).toBe(true,
      'Final Details page was not opened');
  });
});
