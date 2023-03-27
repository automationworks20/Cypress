describe('launch my app', ()=> {

    it('app testing', ()=>{

        cy.visit('http://www.freshworks.com')
        cy.contains('Free Trial')
        cy.contains('Free Trial').click()
        cy.url().should('include', 'products')
    })
})