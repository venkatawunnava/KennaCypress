import SignUp from '../../support/pages/SignUp'


describe.skip('Sign up a new user', () => {
  before(function () {
    // runs once before all tests in the block
    cy.fixture("signupdata").then(function (data) {
      this.data = data;
    });
  });
  const signup = new SignUp();

  it.skip('should open sign up page', function () {
    cy.visit(Cypress.env('signupUrl'));
    signup.firstName().type(this.data.FirstName);
    signup.lastName().type(this.data.LastName);
    signup.email().type(Cypress.env('user') + this.data.WorkEmail);
    signup.company().type(Cypress.env('user'));
    signup.password().type(Cypress.env('password'));
    signup.phone().type(this.data.Phone);
    signup.addressLine1().type(this.data.AddressLine1);
    signup.addressLine2().type(this.data.AddressLine2);
    signup.city().type(this.data.City);
    signup.zip().type(this.data.PostalCode);
    signup.country().select(this.data.Country);
    signup.state().select(this.data.State);
    signup.buisnessWebsite().type(this.data.BusinessWebsite);
    signup.subdomain().invoke('val').should('contain', Cypress.env('user'))
    signup.eula().should('be.checked');
    signup.startFreeTrial().click();
    cy.title().should('eq', 'Sign Up Completed — Kenna');
  })
});

describe.skip('Throw error on clicking sign up button ', () => {
  it.skip('should open sign up page', function () {
    cy.visit(Cypress.env('signupUrl'));
    cy.get('#submit_signup').click();
    cy.get('label[for="firstname"] > .error').should('have.text', 'This field is required.');

  })
});
