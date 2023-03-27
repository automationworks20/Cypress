describe('free crm app', ()=>{
    it('login test', ()=>{
    
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.title().should('include','Test Login | Practice Test Automation')
        cy.get('input[name="username"]').type('123@gmail.com')
        cy.get('input[name="password"]').type('12345678')
        cy.contains('Submit').click()
        cy.contains('Your username is invalid!')
    })
})