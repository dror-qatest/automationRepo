it('UI Elements', () => {
  cy.visit('https://drork-automation-practice.lovable.app/practice')
  cy.get('[data-testid="nav-home"]').click()
})