/// <reference types="Cypress" />

context('Skip links', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('should skip to #main', () => {
      cy.get('#skip-link-main').focus()
        .should('have.css', 'opacity', '1')
        .click()
    
      cy.get('#main')
        .should('have.attr', 'tabindex', '-1')
    
      cy.focused()
        .should('have.attr', 'id', 'main')
    })
  
    it('should skip to #top', () => {
        cy.get('#skip-to-top').click()

        cy.focused()
          .should('have.attr', 'id', 'top')
      })
  })
  