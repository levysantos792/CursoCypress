Cypress.Commands.add('FillMandatoryFieldsAndSubmit', () => {
    const longText = Cypress._.repeat('12345679',10)
    const firstName = 'Levi'
    const lastName = 'Carvalho'
    const phone = '79999999999'
    const email = 'levysantos792@gmail.com'
    cy.get('#firstName').should('be.visible').type(firstName)
    cy.get('#lastName').should('be.visible').type(lastName)
    cy.get('#email').should('be.visible').type(email)
    cy.get('#phone').should('be.visible').type(phone)
    cy.get('#open-text-area').should('be.visible').type(longText, {delay: 0})
    cy.get('.button, Enviar').should('be.visible').click()
})
Cypress.Commands.add('FillMandatoryFieldsAndSubmit', (data = {
    firstName: 'Mariazinha',
    lastName: 'pereirinha',
    email: 'mariazinha@gmail.com',
    phone: '79999999999'
}) => {
    const longText = Cypress._.repeat('12345679',10)
    cy.get('#firstName').should('be.visible').type(data.firstName)
    cy.get('#lastName').should('be.visible').type(data.lastName)
    cy.get('#email').should('be.visible').type(data.email)
    cy.get('#phone').should('be.visible').type(data.phone)
    cy.get('#open-text-area').should('be.visible').type(longText, {delay: 0})
    cy.get('.button, Enviar').should('be.visible').click()
})

Cypress.Commands.add('ImportarArquivo', (arquivo) => {
    const docdir = "cypress//fixtures//"
    // const arquivo = "example.json"
    cy.get('#file-upload')
    .selectFile(`${docdir}${arquivo}`)
    .should(input => expect(input[0].files[0].name).to.equal(arquivo))
})