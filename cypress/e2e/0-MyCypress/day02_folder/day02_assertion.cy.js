describe('', () => {

    it('quailtydemy login test 2', () => {
        cy.visit('https://qa.qualitydemy.com')
        cy.get('.cookieButton > a').click() // cookies accept

        // ASSERTION
        // 1 have-text => controls that text is exist or not
        cy.get('.btn-sign-in-simple').should('have.text', 'Log in') 
        cy.get('.btn-sign-in-simple').click()

        // 2 cy.url().should => controls url 
        cy.url().should('include', 'login')

        // 3 cy.title().should => controls title
        cy.title().should('contain', 'Login')

        // 4. be.visible => controls element is visible or not
        cy.get('.text-14px').should('be.visible');
        
    });
});