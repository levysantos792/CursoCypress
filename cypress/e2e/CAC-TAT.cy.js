describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('src/index.html')
  })
  it('Verficar o titulo da aplicação', () => {
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    const longText = Cypress._.repeat('12345679',10)
    cy.clock()
    cy.get('#firstName').should('be.visible').type('Levi')
    cy.get('#lastName').should('be.visible').type('Carvalho')
    cy.get('#email').should('be.visible').type('levysantos792@gmail.com')
    cy.get('#phone').should('be.visible').type('79999999999')
    cy.get('#open-text-area').should('be.visible').type(longText, {delay: 0})
    cy.contains('button', 'Enviar').click()
    cy.get('.success').should('be.visible')
    cy.tick(4000)
    cy.get('.success').should('not.be.visible')
  })
  it('preenche os campos obrigatórios e envia o formulário', () => {
    cy.clock()
    cy.FillMandatoryFieldsAndSubmit()
    cy.get('.success').should('be.visible')
    cy.tick(4000)
    cy.get('.success').should('not.be.visible')
  })

  it('preenche os campos obrigatórios e envia o formulário com diferentes dados', () => {
    cy.clock()
    const  teste = {
      firstName: 'Levi',
      lastName: 'Carvalho',
      email: 'Levi@gmail.com',
      phone: '79999999999'
    }
    cy.FillMandatoryFieldsAndSubmit(teste)
    cy.get('.success').should('be.visible')
    cy.tick(4000)
    cy.get('.success').should('not.be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.clock()
    cy.get('#firstName').should('be.visible').type('Levi')
    cy.get('#lastName').should('be.visible').type('Carvalho')
    cy.get('#email').should('be.visible').type('levysantos792@gmail,com')
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
    cy.tick(4000)
    cy.get('.error').should('not.be.visible')

  })
  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.clock()
    cy.get('#firstName').should('be.visible').type('Levi')
    cy.get('#lastName').should('be.visible').type('Carvalho')
    cy.get('#email').should('be.visible').type('levysantos792@gmail.com')
    cy.get('#phone-checkbox').should('be.visible').click()
    // cy.get('#phone').should('be.visible').type('').should('have.value', '')
    cy.get('#email').should('be.visible').type('levysantos792@gmail,com')
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
    cy.tick(4000)
    cy.get('.error').should('not.be.visible')
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.clock()
    cy.get('#firstName').should('be.visible').type('Levi').should('not.be.value', '').clear().should('be.value', '')
    cy.get('#lastName').should('be.visible').type('Carvalho').should('not.be.value', '').clear().should('be.value', '')
    cy.get('#email').should('be.visible').type('levysantos792@gmail.com').should('not.be.value', '').clear().should('be.value', '')
    cy.get('#phone').should('be.visible').type('79999999999').should('have.value', '79999999999').should('not.be.value', '').clear().should('be.value', '')
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
    cy.tick(4000)
    cy.get('.error').should('not.be.visible')

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
  it('marca o tipo de atendimento', () => {
    cy.get('input[type="radio"]').each(($radio) => {
      cy.wrap($radio).check().should('be.checked')
    })
  })
  it('marca ambos checkboxes, depois desmarca o últim', () => {
    cy.get('input[type="checkbox"]')
    .should('be.visible')
    .check().each(($checkbox) => { //Verifico se todos foram marcados
      expect($checkbox[0].checked).to.equal(true)})
    cy.get('#phone-checkbox').uncheck()

  })

  it('seleciona um arquivo da pasta fixtures', () => {
    const docdir = "cypress//fixtures//"
    const arquivo = "example.json"
    cy.get('#file-upload')
    .selectFile(`${docdir}${arquivo}`)
    .should(input => expect(input[0].files[0].name).to.equal(arquivo))

  })

  it('seleciona um arquivo simulando um drag-and-drop', () => {
    const docdir = "cypress//fixtures//"
    const arquivo = "example.json"
    cy.get('#file-upload')
    .selectFile(`${docdir}${arquivo}`, {action:'drag-drop'})
    .should(input => expect(input[0].files[0].name).to.equal(arquivo))

  })

  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
    cy.fixture('example.json').as('samplefile')
    cy.get('#file-upload')
    .selectFile('@samplefile', {action:'drag-drop'})
    .should(input => expect(input[0].files[0].name).to.equal('example.json'))
  })

  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    cy.get('a[href="privacy.html"]')
    .should('have.attr','target', '_blank')
  })

  it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    cy.get('a[href="privacy.html"]')
    .invoke('removeAttr', 'target')
    .click()
  })
  it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    cy.get('a[href="privacy.html"]')
    .invoke('removeAttr', 'target')
    .click()
  })

  it('exibe mensagem de sucesso por 3 segundos', function() {
    cy.clock()
    const  teste = {
      firstName: 'Levi',
      lastName: 'Carvalho',
      email: 'Levi@gmail.com',
      phone: '79999999999'
    }
    cy.FillMandatoryFieldsAndSubmit(teste)
    cy.get('.success').should('be.visible')
    cy.tick(4000)
    cy.get('.success').should('not.be.visible')

  })
  Cypress._.times(3, () => {  it.only('exibe mensagem de erro por 3 segundos', () => {
      cy.clock()
      cy.get('#firstName').should('be.visible').type('Levi').should('not.be.value', '').clear().should('be.value', '')
      cy.get('#lastName').should('be.visible').type('Carvalho').should('not.be.value', '').clear().should('be.value', '')
      cy.get('#email').should('be.visible').type('levysantos792@gmail.com').should('not.be.value', '').clear().should('be.value', '')
      cy.get('#phone').should('be.visible').type('79999999999').should('have.value', '79999999999').should('not.be.value', '').clear().should('be.value', '')
      cy.contains('button', 'Enviar').click()
      cy.get('.error').should('be.visible')
      cy.tick(4000)
      cy.get('.error').should('not.be.visible')

    })})

  

})