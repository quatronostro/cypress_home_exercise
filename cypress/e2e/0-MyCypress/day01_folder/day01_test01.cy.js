describe('Cypress Fundamental Commands', () => {

    it('cy.visit command', () => {
        cy.visit('https://www.amazon.com')
    });
    

    it('cy.visit command.2', () => {
        cy.visit('/')        
    });

    it('cy.title command', () => {
        cy.visit('/')
        cy.title().should('contain', 'Google')
    });

    it('cy.url and cy.location', () => {
        cy.visit('/')
        cy.url().should('eq', 'https://www.google.com/')
        cy.url().should('include', 'com')
        cy.url().should('contain', 'google')
    });
});