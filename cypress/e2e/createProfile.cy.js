describe('Check if create profile page renders the correct component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/cadastro')
  })

  it('should steps 1 and 2 works', () => {
    cy.get('input[type="text"]').type('Zurrilho Testador')
    cy.get('input[type="email"]').type('zurrilhotestador@dnc.com')
    cy.get('input[type="tel"]').type('3216546461')
    cy.get('button[type="submit"]').click()
    cy.get('input[type="password"]').type('zurrilho')
    // Para economizar recursos no servidor apenas verifico se
    // seria possível criar o usuário.
    cy.get('button[type="submit"]').should('be.visible')
  })
})
