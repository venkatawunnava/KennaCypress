class SettingRoles {
  roles() {
    return cy.get("a[href*=\'roles\']");
  }

  newUserRole() {
    return cy.get('a[href*=\'/settings/roles/new\']');
  }

  newRoleName() {
    return cy.get("#role_name");
  }

  newRoleRiskmeter() {
    return cy.get("#s2id_autogen1");
  }

  newRoleApplications() {
    return cy.get("#s2id_autogen2");
  }

  //Access type radio button
  newRoleAccessReadonly() {
    return cy.get("#role_access_level_read");
  }

  newRoleAccessWrite() {
    return cy.get("#role_access_level_write");
  }

  newRoleAccessCustom() {
    return cy.get("#role_access_level_custom");
  }

  customRoleGeneralOption() {
    return cy.get("(//button[@class=\"settings-section-toggle \"])[1]");
  }

  customRoleAssetOption() {
    return cy.get("(//button[@class=\"settings-section-toggle \"])[2]");
  }

  customRoleVulnOption() {
    return cy.get("(//button[@class=\"settings-section-toggle \"])[3]");
  }

  newRoleSubmit() {
    return cy.get("#submit");
  }

  newRoleCancel() {
    return cy.get(".cancel");
  }


}

export default SettingRoles