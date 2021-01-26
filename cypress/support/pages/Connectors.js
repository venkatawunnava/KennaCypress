class Connectors {
  
  connAdd() {
    return cy.get('#add-connector');
  }

  checkInvisible() {
    return cy.get('#connector_type_menu');
  }

  connSaveXML() {
    return cy.get('#save');
  }

  btnUploadAndRun(index) {
    return cy.get('.connector:nth-child(' + index + ') > .controls > .btn');
  }

  uploadModalDiv(index) {
    return Cypress.$('.connector:nth-child(' + index + ') > .controls > .btn').attr("data-target");
  }

}

export default Connectors;


