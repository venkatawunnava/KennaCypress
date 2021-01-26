class ExplorePage {

  //TO Check if rows have been loaded
  assetTabActiveCircle() {
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
}

export default ExplorePage