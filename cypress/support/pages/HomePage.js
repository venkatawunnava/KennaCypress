class HomePage {
  // hometab() { return cy.get('//a[@id='home-link']'); }
  //
  // dashboardtab() { return cy.get('//a[@id='dashboard-link']'); }
  exploreTab() { return cy.get('.animationWrapper-2-0-2-24 li:nth-child(2) div:nth-child(1)'); }
  vm() { return cy.get('.navItem-0-2-18.navItem-3-0-2-25'); }
  connectorTab() { return cy.get('.navItem-0-2-18.navItem-9-0-2-43'); }
  settingPg() { return cy.get('.fas.fa-caret-down'); }
  kennaLogo() { return cy.get('.logo-0-2-1') }
  // cy.get('.controls-0-2-105 > :nth-child(2) > .base-0-2-73')

}

export default HomePage