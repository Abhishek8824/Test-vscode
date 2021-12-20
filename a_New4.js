/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe("Banking",function(){
    it("visit url",function(){
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/")
    })

    //customer log in
    it("login as customer",function(){
        cy.get("button").contains("Customer Login").click()
        
        //selecting user from dropdown
        cy.get("select").select("Harry Potter").should("have.value","2")
        cy.get("button[type='submit']").click()
        cy.get("strong").should("contain"," Welcome ")
    
    })
   it("user page",function(){
       cy.get("select").select("1005").should("have.value","number:1005")
       //depositing money
       cy.get("button").contains("Deposit").click()
       cy.get("input[type='number']").type("500")
       cy.get('form.ng-dirty > .btn').click()
       cy.get("span").should("contain","Deposit Successful")
       cy.get("input[type='number']").type("500")
       cy.get('form.ng-dirty > .btn').click()
  
    })
  it("transactions",function(){
    cy.get('[ng-class="btnClass1"]').click()
  
    cy.get('.fixedTopBox > [style="float:left"]').click()
    
    //withdrawl
    cy.get('[ng-class="btnClass3"]').click()
    cy.get("input[placeholder='amount']").type("300")
    cy.get('form.ng-dirty > .btn').click()
    cy.get("span").should("contain","Transaction successful")
    cy.get('[ng-class="btnClass1"]').click()
  })
  it("logging out",function(){
    cy.get('.logout').click()
    cy.get('.home').click()
  })

  //login as manager
  it("login as manager",function(){
      cy.get("button[ng-click='manager()']").click()

      cy.get("button[ng-class='btnClass3']").click()
      
      cy.get(" tr td:nth-child(2)").each(($e1, index, $list)=>{
          const text=$e1.text()
          if(text.includes("Potter")){
            cy.get(" tr td:nth-child(2)").eq(index).next().then(function(accno){
                const accnotext= accno.text()
                expect(accnotext).to.equal("E725JB")
            })
          }
      })
  })
 




})