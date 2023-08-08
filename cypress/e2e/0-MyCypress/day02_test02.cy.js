
context('with context', () => {
    it('visiting google', () => {
        cy.visit('https://google.com')
    });

    it('title', () => {
        cy.visit('https://google.com')
        cy.title().should('contain', 'Google')
    });

    it('', () => {
    
    });
});