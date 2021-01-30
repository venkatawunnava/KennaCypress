class Settings {

  //TO Check if rows have been loaded
  settingUsers() {
    return cy.get('.fa.fa-circle');
  }

  //Search bar

  sidebarSearchBar() {
    return cy.get('#q');
  }

  sidebarSearchButton() {
    return cy.get('#text-search');
  }

  sidebarSaveSearchButton() {
    return cy.get('#save-search');
  }

  createGroupModalName() {
    return cy.get('#name');
  }

  createGroupModalSave() {
    return cy.get('.large-0-2-90');
  }

  createGroupModal() {
    return cy.get('#modal-overlay');
  }
}

export default Settings