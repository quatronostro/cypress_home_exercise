describe('Etsy Test - Search product, sort by a price and add to basket', () => {
    
    before(() => {

        // Go to website
        cy.visit("https://www.etsy.com");
        // verify
        cy.url().should("eq","https://www.etsy.com/");

    });

    it('On the bottom of main page, verify that "About" is visible' , () => {
        
        cy.scrollTo("bottom");
        cy.get(':nth-child(3) > .wt-hide-xs').should('be.visible');
        cy.wait(2000);

    });

    it('Search product', () => {
        
        cy.scrollTo("top");
        cy.get('#global-enhancements-search-query').type('bracelet{enter}');

    });

    it('Filter sort by a Lowest Price', () => {
        
        cy.get('#sortby > .wt-menu__trigger').click();

        // verify menu body contains the following items
        const filter_options = ['Relevancy', 'Lowest Price', 'Highest Price', 'Top Customer Reviews', 'Most Recent'];

        filter_options.forEach((option) => {
            cy.get('#sortby > .wt-menu__body').
            contains(option).
            should("be.visible").
            then(() => {
                cy.log('"${option}" is visible');
            });
        });
        

        

    });
    
});