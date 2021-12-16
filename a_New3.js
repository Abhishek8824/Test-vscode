describe("eCommerce practice",function(){
    it("visiting url",function(){

        cy.visit("http://automationpractice.com/")
    })

    it("choosing catagory",function(){
        //mouse hover 
        cy.get(".sf-with-ul").contains("Women").invoke("show").click()
    })

    it("selecting dress",function(){
        cy.get('#layered_id_attribute_group_3').check().should("be.checked")
        cy.get(".subcategory-name").contains("Tops").click()
        cy.get("span").contains("Add to cart").click()
    })

    it("check out",function(){
        cy.get('.button-container > .button-medium > span').click()
        //validation
        cy.get("#total_price").should("have.text",'$18.51')
        cy.get('.cart_navigation > .button > span').click()
    })

    
})