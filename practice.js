/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe("snapdeal shopping",function(){

    it("visiting url",function(){
        cy.visit("https://unacademy.com/")
        cy.get(':nth-child(1) > .css-1nvqjwi-BtnContainer > .css-1sar6k5-StyledAnchor > .e1gvoanf0').click()   

        cy.get(':nth-child(8) > .e62y3jj4 > .css-12lrdup-P1-GoalGroupName').click()

        cy.get('#UKPCC > .css-13berru-GoalGroupChildren > .MuiPaper-root > :nth-child(2) > .css-1awx5bf-P1 > .css-16e50b3-GoalName').click()
    
        cy.frameLoaded('div:nth-child(1) div.css-10x7q8o-Container.e2ol3912 div.css-hp2t0r-Wrapper.eiav8li15:nth-child(1) div.css-1hyhggz-Header.eiav8li10 > h1.css-s87x4-H1-Title.eiav8li5')
        cy.iframe().find('h1[class="css-s87x4-H1-Title eiav8li5"]').invoke("text").then((text1)=>{
            expect(text1).to.eq("contain","Crack NEET PG with India's largest learning platform ")
        })
        
    
    })
})