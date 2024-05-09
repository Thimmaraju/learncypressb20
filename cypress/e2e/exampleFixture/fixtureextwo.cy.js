import logindata from "../../fixtures/logincreds.json"

describe('Verify Add employee functionality', function() {

    before(function () {
        cy.fixture('PIM/addemployee').then(function (data) {
          this.data = data;
        })
      })
   
    it('Verify add employee with Mandotory details', function() {

        cy.log("Test execution started")
       
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[name="username"]').type(logindata.username)
        cy.get('input[type="password"]').type(logindata.password)
        cy.get('button[type="submit"]').click()

        cy.url().should("eq", 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        //or

        cy.url().should("include", "/web/index.php/dashboard/index")

        cy.contains('PIM').click()

        cy.contains('Add Employee').click()

        cy.get('input[name="firstName"]').type(this.data.firstname)

        cy.get('input[name="lastName"]').type(this.data.lastname)

        cy.get('button[type="submit"]').click()

        cy.contains('Successfully Saved').should("be.visible")

      })

     
  })