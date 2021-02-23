context('Actions', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('My First Test', () => {
    it('A react learning link should render on the site', () => {
      cy.findByText('Learn React').should('exist')
    })
  })

})
