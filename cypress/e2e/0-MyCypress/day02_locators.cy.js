describe('taking locators', () => {
    it('cy.get command', () => {
        cy.visit('/')
        cy.get('#APjFqb').type('cypress{enter}') // sendkeys
        cy.get('.MUFPAc > :nth-child(2) > a').click
    });
});