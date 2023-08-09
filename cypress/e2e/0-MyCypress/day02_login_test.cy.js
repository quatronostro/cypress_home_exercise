// 'https://qa.qualitydemy.com'
// 'mb@babayigit.net'
// 'M123456.b'

describe('login test', () => {

    it('qualitydemy login test', () => {
        cy.visit('https://qa.qualitydemy.com')
        cy.get('.cookieButton > a').click() // cookies accept

        cy.contains('Log in') // assert login => we can also click that if we want
        //cy.contain('log in', {matchCase:false}) // case sens false
        cy.get('.btn-sign-in-simple').click() // login button

        cy.get('#login-email').type('mb@babayigit.net') // login email box
        cy.get('#login-password').type('M123456.b') // login pass box
        cy.get('#sign_up > :nth-child(3) > .btn').click() // login button

        cy.contains('Welcome')
    });
});