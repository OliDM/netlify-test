context('Actions', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  describe('My First Test', () => {
    it('A react learning link should render on the site', () => {
      cy.findByText('Learn React').should('exist')
    })
  })

})
