describe('amazon',function(){
    it('3rd test case',function(){
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and ('have.value','option1')
        cy.get('[type="checkbox"]').check(['option2','option3'])
        cy.get('#dropdown-class-example').select('option1').should('have.value','option1')
     

      //tables in web
      cy.get('tr td:nth-child(2)').each(($e1, index, $list)=> {
           const text= $e1.text()
           if(text.includes("JMETER"))
           {
            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
{
            
                   const priceText= price.text()
                    expect(priceText).to.equal('25')
            })
           }
      })
      //cy.get('.mouse-hover-content').invoke('show')
      cy.get('.mouse-hover-content')
      cy.contains('Top').click({force:true})
    })
})
