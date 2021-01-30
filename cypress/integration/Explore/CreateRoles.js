import ExplorePage from "../../support/pages/ExplorePage";
import HomePage from "../../support/pages/HomePage";

const explorePage = new ExplorePage();
const homePage = new HomePage();
const riskMeterData = require('../../fixtures/riskMeters.json')

describe('Create Risk Meters', () => {
  beforeEach(function () {
    cy.login();
  });


  it('Creating Risk Meter ', function () {
    homePage.exploreTab().click({force: true});
    // cy.get('.fas.fa-caret-down').trigger("mouseover");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    // cy.wait(10000);
    cy.get('a[href*=\'roles\']').click({force: true});
    cy.wait(10000);
    cy.get('a[href*=\'users\']').click({force: true});

  })
});