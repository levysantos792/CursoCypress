describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('src/index.html')
  })
  it('Verficar o titulo da aplicação', () => {
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })

  it.only('preenche os campos obrigatórios e envia o formulário', () => {
    const longText = Cypress._.repeat('12345679',10)
    cy.get('#firstName').should('be.visible').type('Levi')
    cy.get('#lastName').should('be.visible').type('Carvalho')
    cy.get('#email').should('be.visible').type('levysantos792@gmail.com')
    cy.get('#phone').should('be.visible').type('79999999999')
    cy.get('#open-text-area').should('be.visible').type(longText, {delay: 0})
    cy.get('.button, Enviar').should('be.visible').click()
    cy.get('.success').should('be.visible')
  })
})