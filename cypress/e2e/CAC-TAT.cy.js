describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('src/index.html')
  })
  it('Verficar o titulo da aplicação', () => {
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    const longText = Cypress._.repeat('12345679',10)
    cy.get('#firstName').should('be.visible').type('Levi')
    cy.get('#lastName').should('be.visible').type('Carvalho')
    cy.get('#email').should('be.visible').type('levysantos792@gmail.com')
    cy.get('#phone').should('be.visible').type('79999999999')
    cy.get('#open-text-area').should('be.visible').type(longText, {delay: 0})
    cy.contains('button', 'Enviar').click()
    cy.get('.success').should('be.visible')
  })
  it('preenche os campos obrigatórios e envia o formulário', () => {
    cy.FillMandatoryFieldsAndSubmit()
    cy.get('.success').should('be.visible')
  })

  it('preenche os campos obrigatórios e envia o formulário com diferentes dados', () => {
    const  teste = {
      firstName: 'Levi',
      lastName: 'Carvalho',
      email: 'Levi@gmail.com',
      phone: '79999999999'
    }
    cy.FillMandatoryFieldsAndSubmit(teste)
    cy.get('.success').should('be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName').should('be.visible').type('Levi')
    cy.get('#lastName').should('be.visible').type('Carvalho')
    cy.get('#email').should('be.visible').type('levysantos792@gmail,com')
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')

  })
  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName').should('be.visible').type('Levi')
    cy.get('#lastName').should('be.visible').type('Carvalho')
    cy.get('#email').should('be.visible').type('levysantos792@gmail.com')
    cy.get('#phone-checkbox').should('be.visible').click()
    // cy.get('#phone').should('be.visible').type('').should('have.value', '')
    cy.get('#email').should('be.visible').type('levysantos792@gmail,com')
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName').should('be.visible').type('Levi').should('not.be.value', '').clear().should('be.value', '')
    cy.get('#lastName').should('be.visible').type('Carvalho').should('not.be.value', '').clear().should('be.value', '')
    cy.get('#email').should('be.visible').type('levysantos792@gmail.com').should('not.be.value', '').clear().should('be.value', '')
    cy.get('#phone').should('be.visible').type('79999999999').should('have.value', '79999999999').should('not.be.value', '').clear().should('be.value', '')
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')

  })

  //usando select
  it('seleciona um produto (YouTube) por seu texto', () => {
    cy.get('#product').select('youtube').should('have.value', 'youtube') //texto
  })
  it('seleciona um produto (Mentoria) por seu texto', () => {
    cy.get('#product').select('mentoria').should('have.value', 'mentoria') //value
  })
  it('seleciona um produto (Blog) por seu texto', () => {
    cy.get('#product').select(1).should('have.value', 'blog') //indice
  })

  it('marca o tipo de atendimento Feedback', () => {
    cy.get('input[type="radio"][value="feedback"]').should('be.visible').check().should('be.checked')

  })
  it.only('marca o tipo de atendimento', () => {
    cy.get('input[type="radio"]').each(($radio) => {
      cy.wrap($radio).check().should('be.checked')
    })
  })
  

})