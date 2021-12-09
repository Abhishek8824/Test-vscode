/// <reference types="Cypress" />
import HomePage from '../pageObjects/HomePage'
describe('my test suite',function(){
    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })
    it('test cases',function(){
        const homePage= new HomePage()

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[name*="name"]:nth-child(1)').type(this.data.name)
        cy.get('select').select(this.data.gender)
        cy.get('input[name*="name"]:nth-child(1)').should('have.value',this.data.name)
        cy.get('input[name*="name"]:nth-child(2)').should('have.attr','minlength','2')
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get('.nav-item:nth-child(2)').click()
        

        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })




    })
})