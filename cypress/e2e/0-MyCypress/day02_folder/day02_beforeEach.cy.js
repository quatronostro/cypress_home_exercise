describe('', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    // we dont have to write cy.visit() command in every it
    // we can describe as a before method
    it('title', () => {
        cy.title().should('contain', 'Google')
    });

    it('url', () => {
        cy.url().should('include', 'google')
    });
});