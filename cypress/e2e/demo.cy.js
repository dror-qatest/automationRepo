it('demo tests', () => {
  cy.visit('https://practice-playful-pages.lovable.app/')
  cy.get('[data-testid="nav-cart"]').click()
  cy.get('[data-testid="cart-title"]').should('contain', 'Shopping Cart1')
})