describe("assignment",function(){
    it("test scripts",function(){

        cy.visit("https://katalon-demo-cura.herokuapp.com/")
        cy.get("#btn-make-appointment").click()
        cy.get("#txt-username").type("John Doe")
        cy.get("#txt-password").type("ThisIsNotAPassword")
        cy.get("#btn-login").click()
        // dropdown
        cy.get("select").select('Seoul CURA Healthcare Center')
        //checkbox
        cy.get("#chk_hospotal_readmission").check().should("be.checked")
        cy.get("#radio_program_medicaid").check().should("be.checked")
           
        //calender
        cy.get("#txt_visit_date").type("16/12/2021")
        //textbox
        cy.get("#txt_comment").click({force:true})
        cy.get("#txt_comment").type("yo")
        cy.get("#btn-book-appointment").click()
        // back to return page
        cy.get("a[class='btn btn-default']").click()

        cy.get("#menu-toggle").click()


    })
})