
// with desribe, we are describing our test case (I think)
describe('Amazon Test', () => {
    
    // with it, we are describing our test steps
    it('Go to cypress page', () => {
        cy.visit("https://www.amazon.com.tr/")
        cy.wait(2000)
        
    });

    // clickt with cy
    //it('click cookies', () => {
    //    cy.get('#a-autoid-0').click();
    //});

    // click with xpath
    it('Click with xpath', () => {
        cy.xpath('//*[@id="sp-cc-accept"]').click();
    });

    it('Verify url and title', () => {
        // Assert url
        cy.url().should('include', 'amazon')

        // Assert title
        cy.title().should('include', 'Amazon')
    });

    it('Send keys to search box', () => {
        cy.get('#twotabsearchtextbox').type('Samsung S23 Ultra{enter}');
        
        // cookies (again?)
        cy.xpath('//*[@id="sp-cc-accept"]').click();

        // search button
        //cy.get('#nav-search-submit-button').click();

    });

    it('Choose first product on the page', () => {
        cy.wait(1000)

        //with eq => but its not working properly cause of page load problems
        //cy.get('.s-result-list .s-result-item').eq(3).click();
        
        // it didnt work :(
        //cy.get('#p_89\/SAMSUNG > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon').click();

    });

    it('Back to main page', () => {
        cy.go('back');
        //cy.go('back');
        cy.xpath('//*[@id="sp-cc-accept"]').click();

        //to go forward
        //cy.go('forward);

    });

    it('Choose electronic from category drop down menu', () => {

        //choose from drop down menu
        cy.get('#searchDropdownBox').select('Elektronik')
    });

    it('Click account registiration', () => {
        cy.get('#nav-link-accountList').click();

        //click with contains
        cy.contains("Amazon hesabınızı oluşturun").click();

    });

    it('Assertion', () => {
        //these are for verifying text contains in locator
        cy.get(':nth-child(1) > :nth-child(2) > .a-form-label').should("contain", "Ad - Soyad")
        cy.get('[for="ap_email"]').should("be.visible", "Cep telefonu numarası veya e-posta")
        // if text has some white space we should use codes above
        // but if we trying to find exact same string we should use have.text for assertion

        // This is another way to assertion
        cy.contains("Cep telefonu numarası veya e-posta").should("be.visible")

    });

});


// Second test case
describe('Searching product on Amazon', () => {
    
    it('Visit Amazon home page', () => {
        cy.visit("https://www.amazon.com.tr/")
    });

    it('click cookies', () => {
        cy.get('#a-autoid-0').click();
    });

    it('Enter the product name on search box', () => {
        // String variable
        const product_name = "alcatel 2019g";
        cy.get('#twotabsearchtextbox').type(product_name);

        // Search button
        cy.get('#nav-search-submit-button').click();
        
        // cookies (again?)
        cy.xpath('//*[@id="sp-cc-accept"]').click();

    });

    it('Verify search result', () => {
        cy.get('.sg-col-inner').should("have.length", 35)
        // this number is always changing so its not dynamic
        // this test step cant pass...
    });


});