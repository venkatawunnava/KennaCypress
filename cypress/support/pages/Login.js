class Login {
  userEmail() {
    return cy.get('#user_email');
  }

  userPass() {
    return cy.get('#user_password');
  }

  submit() {
    return cy.get('input[name="commit"]');
  }
}

export default Login