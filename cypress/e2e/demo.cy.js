it('UI Elements', () => {
  cy.visit('https://drork-automation-practice.lovable.app/practice')
  cy.get('[data-cy="sidebar-dialogs-frames"]').click()
 cy.get('[data-cy="sandbox-frame"]')                    // the <iframe> element itself
  .its('0.contentDocument.body')                   // reach into its inner document                        // retry until iframe has loaded
  .then(cy.wrap)                                   // wrap it so cy commands work on it
  .find('#inner-text')
  .should('be.visible')
  .and('have.text', 'I live in an iframe.');
})