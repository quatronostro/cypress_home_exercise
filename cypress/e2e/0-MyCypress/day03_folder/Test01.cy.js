describe('Automation Exercise positive login test', () => {
    it('Go to url', () => {
        cy.visit('https://www.automationexercise.com')
    });

    it('Go to login page', () => {
        // Sign up and login button
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    });

    it('Login page', () => {
        // Assert "Login to your account" text
        cy.get('.login-form > h2').should('be.visible');

        // To display some message in terminal
        cy.log("Assertion passed")

        // email box
        cy.get('.login-form > form > [type="email"]').type("babayigit@gmail.com")

        // password box
        cy.get('[type="password"]').type("123456{enter}")
    });
});