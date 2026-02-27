describe('Basic', () => {
  it('loads the homepage', () => {
    cy.visit('/')

    cy.url()
      .should('eq', 'http://localhost:3333/')

    cy.contains('Redline')
      .should('exist')
  })

  it('navigates to about', () => {
    cy.visit('/about')

    cy.url()
      .should('eq', 'http://localhost:3333/about')
  })
})
