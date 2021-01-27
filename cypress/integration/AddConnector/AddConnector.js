// import Connectors from '../../support/pages/Connectors'
// import HomePage from '../../support/pages/HomePage'
// import addConnectorData from '../../fixtures/addConnectorData.json'
//
// const connectors = new Connectors();
// const homePage = new HomePage();
// const connectorData = addConnectorData;
//
// describe.skip('Add Connectors and Run', () => {
//   beforeEach(function () {
//     cy.login();
//   });
//
//   connectorData.add_connector.forEach((addConnector) => {
//     it.skip('adding connector '+addConnector.connector, function () {
//       homePage.connectorTab().click();
//       connectors.connAdd().click();
//       console.log(addConnector.connector);
//       cy.log(addConnector.connector);
//       cy.get(addConnector.connector).click();
//       connectors.connSaveXML().click();
//     })
//   })
//
//
//   connectorData.uploadFile.forEach((connectorName) => {
//     it('uploads the file for '+connectorName.connectorName+' and runs the connector', function () {
//       homePage.connectorTab().click();
//
//       cy.get('.slider__item').each(($e1, index) => {
//
//         if ($e1.text().includes(connectorName.connectorName)) {
//           index += 1;
//           // eslint-disable-next-line cypress/no-force
//           connectors.btnUploadAndRun(index).click({force: true});
//           cy.get(connectors.uploadModalDiv(index)).attachFile('XMLFiles/' + connectorName.fileName, {subjectType: 'drag-n-drop'});
//           // eslint-disable-next-line cypress/no-unnecessary-waiting
//           cy.wait(10000)
//         }
//       })
//     })
//   })
// });