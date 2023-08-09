describe('taking locators', () => {
    it('cy.get command', () => {
        cy.visit('/')
        cy.get('#APjFqb').type('cypress{enter}') // sendkeys
        //cy.get('[style="position:absolute;right:11px;top:13px;color:inherit"]').click() // not working
        //cy.get('.MUFPAc > :nth-child(2) > a') // its not working!!!

        cy.get('.MUFPAc > :nth-child(2) >>').click()
        
        cy.get('.F1hUFe').click()
        cy.get('#APjFqb').type('nutella{enter}') // sendkeys
        cy.get('.MUFPAc > :nth-child(2) >>').click()
        cy.get('.F1hUFe').click()

        cy.get('#APjFqb').type('samsung{enter}') // sendkeys
        cy.get('.CCgQ5 > span')
        cy.go('back')
    });
});