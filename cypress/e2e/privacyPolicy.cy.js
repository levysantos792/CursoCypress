describe('Privacy Policy', () => {
    it('Testar pagina de politica de privacidade de forma independente', () => {
        cy.visit('src/privacy.html')
        cy.get('#title').should('be.have','CAC TAT - Política de Privacidade' )
    })
})