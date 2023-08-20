describe('Cimri Website Test', () => {
    
    beforeEach(()=> {
        // it will work before every test run
        cy.visit("https://www.cimri.com/")
    })


    /*
    afterEach(()=> {
        // it will work after every test run
        cy.reload();
    })
    */

    it('Verify that home page opens', () => {

        // Assert Url
        cy.url().should('eq', "https://www.cimri.com/");
        
    });

    it('Search process', () => {
        const search_text = "Asus Rog Zephyrus"
        cy.contains('Neyi en ucuza almak istersin?').type(search_text);
        cy.wait(2000)
        cy.contains('asus rog zephyrus g14').click({force:true});

    });



});