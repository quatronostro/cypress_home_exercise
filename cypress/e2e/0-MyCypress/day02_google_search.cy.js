describe('', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    it('google search', () => {
        cy.get('#APjFqb').type('3 idiots movie{enter}')
        
    });

    it('google search 2', () => {
        cy.get('#APjFqb').type('god father 2 movie{enter}')
    });
});