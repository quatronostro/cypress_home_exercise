
// with desribe, we are describing our test case (I think)
describe('first udemy test', () => {
    
    // with it, we are describing our test steps
    it('Go to cypress page', () => {
        cy.visit("https://www.amazon.com.tr/")
        
    });

    it('click cookies', () => {
        cy.get('#a-autoid-0').click();
    });
});