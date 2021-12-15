describe("book my show",function(){
    it("visiting url",function(){

        cy.visit('https://in.bookmyshow.com/')
    })

    it("selecting city",function(){
        cy.get("#wzrk-cancel").click()
        cy.get("img[alt='PUNE']").click()
    })

    it("selecting movies",function(){
        cy.get('[href="/explore/movies-pune"]').click()
        cy.get('[href="https://in.bookmyshow.com/pune/movies/spiderman-no-way-home/ET00310790"] > .sc-dv5ht7-0 > .sc-133848s-3 > :nth-child(1) > .sc-7o7nez-0').click()
    
})
    it("book tickets",function(){
    cy.get("#page-cta-container").click()   
    cy.get("span").contains("IMAX 3D").click()
    cy.get("div").contains("SUN").click()
    cy.get("div.body.showtimes-details-container > div.showtime-pill-wrapper > div:nth-child(1) > a > div > div").click()
    cy.get("#btnPopupAccept").click()
    cy.get("#pop_2").click()
    cy.get("#proceed-Qty").click()
    })



})