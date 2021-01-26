class SignUp {
  firstName() {
    return cy.get('#firstname');
  }

  lastName() {
    return cy.get('#lastname');
  }

  email() {
    return cy.get('#email');
  }

  company() {
    return cy.get('#company');
  }

  password() {
    return cy.get('#password');
  }

  phone() {
    return cy.get('#phone');
  }

  addressLine1() {
    return cy.get('#address');
  }

  addressLine2() {
    return cy.get('#address_2');
  }

  city() {
    return cy.get('#city');
  }

  zip() {
    return cy.get('#postalcode');
  }

  country() {
    return cy.get('#country');
  }

  state() {
    return cy.get('#state');
  }

  buisnessWebsite() {
    return cy.get('#website');
  }

  subdomain() {
    return cy.get('#subdomain');
  }

  startFreeTrial() {
    return cy.get('#submit_signup');
  }

  eula() {
    return cy.get('#eula');
  }

}

export default SignUp;
