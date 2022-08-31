const DesktopNavigationSelector = '#navigation-desktop'
const MobileNavigationSelector = '#navigation-mobile'
const MenuSelector = '.menu'
const ToggleMenuSelector = ".toggle-menu-btn"

describe('navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  context('Desktop navigation', () => {
    it('should display desktop navigation', () => {
        cy.viewport('macbook-16')
        cy.wait(1000)
        cy.get(DesktopNavigationSelector).should('exist')
        cy.get(MobileNavigationSelector).should('not.be.visible')
    })
    it('should push url with navigation', () => {
      cy.viewport('macbook-16')
      cy.get(DesktopNavigationSelector).get('a.q-tab:contains("Overall")').click()
      cy.get(".q-breadcrumbs").should('contain', 'Overall')
      cy.get(DesktopNavigationSelector).get('a.q-tab:contains("Overall")').click()
      cy.get(DesktopNavigationSelector).get('a.q-tab:contains("Overall")').click()
      cy.wait(1000)
    })
  })

  context('Mobile navigation', () => {
    it('should display mobile navigation', () => {
      cy.viewport('iphone-6')
      cy.wait(1000)
      cy.get(DesktopNavigationSelector).get(MenuSelector).should('not.be.visible')
      cy.get(MobileNavigationSelector).should('exist')
    })

    it('should push url with navigation', () => {
      cy.viewport('iphone-6')
      cy.get(ToggleMenuSelector).click()
      cy.get(MobileNavigationSelector).get('a.q-btn.full-width:contains("Overall")').click()
      cy.get(".q-breadcrumbs").should('contain', 'Overall')
    })
  })
})
