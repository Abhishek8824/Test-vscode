/// <reference types="Cypress" />
describe("efef",function(){
    it("eff",function(){


        cy.visit("https://www.amazon.in/")
        cy.get(".nav-line-1-container").click()
        cy.get("#ap_email").type("abhishekhajare5@gmail.com")
        cy.get("#continue").click()
        cy.get("#ap_password").type("Hajare@123")
        cy.get("#signInSubmit").click()
        cy.get('input[type="checkbox"]').check().should("be.checked")
                   
    })
})