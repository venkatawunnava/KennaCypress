import ExplorePage from "../../support/pages/ExplorePage";
import HomePage from "../../support/pages/HomePage";


const explorePage = new ExplorePage();
const homePage = new HomePage();
const riskMeterData = require('../../fixtures/riskMeters.json')

describe('Create Risk Meters', () => {
  beforeEach(function () {
    cy.login();
  });

  riskMeterData.add_riskMeter.forEach((addRiskMeter) => {
    it('Creating Risk Meter '+addRiskMeter.saveAs, function () {
      homePage.exploreTab().click({force: true});
      explorePage.sidebarSearchBar().type(addRiskMeter.search);
      explorePage.sidebarSearchButton().click();
      explorePage.sidebarSaveSearchButton().click();
      explorePage.createGroupModalName().type(addRiskMeter.saveAs);
      explorePage.createGroupModalSave().click();
      // explorePage.createGroupModalName().should('not.be.visible');
      // explorePage.createGroupModal().should('not.exist');
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(10000);
    })
  })
});