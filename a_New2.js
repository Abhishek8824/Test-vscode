describe("conduit app",function(){

    it("visiting url",function(){
       cy.visit("https://react-redux.realworld.io/#/?_k=d0oh7e")
    })
    
    it("signup",function(){
        cy.get(".nav-link").contains("Sign up").click()

        cy.get("input[placeholder='Username']").type('abhishe8824')
        cy.get("input[type='email']").type("8824abhishek@gmail.com")
        cy.get('input[type="password"]').type("password")
        cy.get("button[type='submit']").click()
    })

    it("signin",function(){
        cy.get(".nav-link").contains("Sign in").click()
        cy.get("input[type='email']").type("8824abhishek@gmail.com")
        cy.get('input[type="password"]').type("password")
        cy.get("button[type='submit']").click()
            cy.get(".navbar-brand").contains("conduit").should("have.text","conduit")
    })
    
   it("new post",function(){
    cy.get('.ion-compose').click()
    cy.get("input[placeholder='Article Title']").type("hii")
    cy.get(':nth-child(2) > .form-control').type("hello")
    cy.get(':nth-child(3) > .form-control').type("test scripts")
    cy.get("input[placeholder='Enter tags']").type("#cypressAutomation")
    cy.get('.btn').click()
   //validation
   cy.get(".container h1").should("have.text","hii")
   })

})