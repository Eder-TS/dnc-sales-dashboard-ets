describe('Login flow correct credentials', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should display login form', () => {
    cy.get('form').should('be.visible')
  })

  it('should login with valid credentials', () => {
    cy.get('input[type="email"]').type('tester2525@dnc.com')
    cy.get('input[type="password"]').type('Tester@2525')
    cy.get('form').then(($form) => {
      $form.on('submit', (e) => {
        e.preventDefault()
      })
    })
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/home')
    cy.get('header').should('be.visible')
  })
})

describe('Login flow invalid credentials', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should display login form', () => {
    cy.get('form').should('be.visible')
  })

  it('should login with invalid credentials', () => {
    cy.get('input[type="email"]').type('invalid@dnc.com')
    cy.get('input[type="password"]').type('Zer0zero@')
    cy.get('form').then(($form) => {
      $form.on('submit', (e) => {
        e.preventDefault()
      })
    })
    cy.get('button[type="submit"]').click()
    cy.contains('Email e/ou senha inválidos.').should('be.visible')
  })
})
