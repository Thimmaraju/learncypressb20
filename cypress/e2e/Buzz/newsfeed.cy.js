
describe('Verify Buzz Functionalities', () => {

    it('Verify Whats on your mind', () => {
     
        cy.log("Test execution started")
       
        cy.visit('/web/index.php/auth/login')

        cy.get('input[name="username"]').type(Cypress.env("username"))
        cy.get('input[type="password"]').type(Cypress.env("password"))
        cy.get('button[type="submit"]').click()

        cy.url().should("eq", 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        //or

        cy.url().should("include", "/web/index.php/dashboard/index")

        cy.contains("Buzz").click()

        cy.url().should("include", "/web/index.php/buzz/viewBuzz")

        cy.get(`textarea[placeholder="What's on your Raju?"]`,{timeout: 40000}).type("Happy Birthday Ramesh")

        cy.get('button[type="submit"]').click()
        cy.contains('Happy Birthday Ramesh').should("be.visible")

    })
  })