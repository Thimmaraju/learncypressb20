import logindata from "../fixtures/logincreds.json"
import jobtitledata from "../fixtures/addjobtitle.json"
describe('Verify Add Job', () => {

    it('Veirfy adding a job with mandatory details', () => {
   
        cy.log("Test execution started")
       
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[name="username"]').type(logindata.username)
        cy.get('input[type="password"]').type(logindata.password)
        cy.get('button[type="submit"]').click()

        cy.url().should("eq", 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        //or

        cy.url().should("include", "/web/index.php/dashboard/index")
        cy.contains("Admin").click()
        cy.contains('Job').click()
        cy.contains('Job Titles').click()

        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

        let randomtext = (Math.random() + 1).toString(36).substring(7);
        cy.get('input[class="oxd-input oxd-input--active"]').last().type(jobtitledata.title+randomtext)

        cy.get('textarea[placeholder="Type description here"]').type(jobtitledata.description)
        cy.get('button[type="submit"]').click()
        cy.contains('Successfully Saved').should("be.visible")


    })

  })