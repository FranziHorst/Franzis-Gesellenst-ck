describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.clearLocalStorage()
  })

  it('has the right title', () => {
    cy.title().should('eq', 'Franzi Gesellenstueck')
  })

  it('has a h2', () => {
    cy.get('h2').should('have.length', 2)
  })
  it('has a p', () => {
    cy.get('p').should('have.length', 4)

    cy.get('[data-cy="Specialbutton"]').click()
  })
})
