describe('Check if home page renders the correct component', () => {
  beforeEach(() => {
    cy.login('tester2525@dnc.com', 'Tester@2525')
    cy.visit('http://localhost:5173/home')
  })

  it('should display total sales', () => {
    // Este teste irá quebrar inicialmente pois
    // não há id total-sales. Id's podem ser adicionadas
    // para aferição dos testes.
    cy.get('#total-sales').should('be.visible')
  })

  it('should display total leads', () => {
    // Este teste irá quebrar inicialmente pois
    // não há id total-sales. Id's podem ser adicionadas
    // para aferição dos testes.
    cy.get('#total-leads').should('be.visible')
  })

  it('should display month sales chart', () => {
    // Este teste irá quebrar inicialmente pois
    // não há id total-sales. Id's podem ser adicionadas
    // para aferição dos testes.
    cy.get('#month-sales-chart').should('be.visible')
  })

  it('should display sales stars', () => {
    // Este teste irá quebrar inicialmente pois
    // não há id total-sales. Id's podem ser adicionadas
    // para aferição dos testes.
    cy.get('#sales-stars').should('be.visible')
  })

  it('should display news', () => {
    // Este teste irá quebrar inicialmente pois
    // não há id total-sales. Id's podem ser adicionadas
    // para aferição dos testes.
    cy.get('#news').should('be.visible')
  })

  it('should display year sales chart', () => {
    // Este teste irá quebrar inicialmente pois
    // não há id total-sales. Id's podem ser adicionadas
    // para aferição dos testes.
    cy.get('#year-sales-chart').should('be.visible')
  })
})
