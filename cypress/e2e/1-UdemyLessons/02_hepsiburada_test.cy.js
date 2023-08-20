describe('Hepsiburada Test', () => {
    
    beforeEach(()=> {
        // it will work before every test run
        cy.visit("https://hepsiburada.com.tr")
    })



    afterEach(()=> {
        // it will work after every test run
        cy.reload();
    })

});