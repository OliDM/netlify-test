context('Actions', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('My First Test', () => {
    it('A react learning link should render on the site', () => {
      cy.findByText('Learn React').should('exist')
    })
  })

  describe('this test will fail', () => {
    it('checking plugin behavior on error', () => {
      cy.findByText('Learn React in 5 seconds').should('exist')
    })
  })

})
