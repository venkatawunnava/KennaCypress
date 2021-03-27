import SettingRoles from "../../support/pages/SettingRoles";
import HomePage from "../../support/pages/HomePage";

const settingRoles = new SettingRoles();
const homePage = new HomePage();
describe('Create Risk Meters', () => {
  beforeEach(function () {
    cy.login();
  });


  it('Creating Risk Meter ', function () {
    homePage.settingPg().trigger('mouseover');
    settingRoles.roles().click({force: true});
    settingRoles.newUserRole().click();
    settingRoles.newRoleName().type('Readonly role');
    settingRoles.newRoleRiskmeter().type('All Assets{enter}')
    settingRoles.newRoleSubmit().click();

  })
});