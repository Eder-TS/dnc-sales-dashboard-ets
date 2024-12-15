/// <reference types="cypress" />

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable {
    login(email: string, password: string): Chainable<void>
  }
}

Cypress.Commands.add('login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('http://localhost:5173/')
    cy.get('input[type="email"]').type(username)
    cy.get('input[type="password"]').type(password)

    // As cinco linhas de código a seguir foram adicionadas para evitar que a página fosse
    // recarregada durante/após o click no botão.
    // É um problema da versão atual (15/12/24) do Cypress.
    cy.get('form').then(($form) => {
      $form.on('submit', (e) => {
        e.preventDefault()
      })
    })
    cy.get('button[type="submit"]').click()
    cy.url().should('include', 'home')
  })
})
