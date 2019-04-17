/// <reference types="Cypress" />

context('Homepage', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.injectAxe()
    })

    it('Has no detectable accessibility violations on load', () => {
        // Configure aXe and test the page at initial load
        // cy.configureAxe({
        //   branding: {
        //     brand: String,
        //     application: String
        //   },
        //   reporter: "option",
        //   checks: [Object],
        //   rules: [Object],
        //   locale: Object
        // })
        cy.checkA11y()
      })
})