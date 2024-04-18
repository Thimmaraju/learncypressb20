describe('Verify google search', () => {
  it('Serach Tajmahal', () => {
    cy.visit('https://www.google.com/')

    cy.get('#APjFqb').type("TajMahal{enter}")
  })
})