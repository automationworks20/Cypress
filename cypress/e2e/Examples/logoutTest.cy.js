describe('free crm app', ()=>{
    it('login test', ()=>{
    
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.title().should('include','Test Login | Practice Test Automation')
        cy.get('input[name="username"]').type('student')
        cy.get('input[name="password"]').type('Password123')
        cy.contains('Submit').click()
        cy.title().should('include','Logged In Successfully | Practice Test Automation')
        cy.contains('Log out').click()
        cy.title().should('include','Test Login | Practice Test Automation')

    })
})