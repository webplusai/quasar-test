const BreadcrumbscambSelector = ""
describe('Routing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  context('Main routes', () => {
    it('routing works for main routes', () => {
      cy.wait(1000)
      cy.visit('http://localhost:3000')
      cy.get("#home").should("contain","Features")
    })
  })

  context('Skills routes', () => {
    it('routing works for children of skills', () => {
      cy.visit('http://localhost:3000/skills')
      cy.get(".q-breadcrumbs").should("contain", "Skills")
      cy.visit('http://localhost:3000/skills/add')
      cy.get(".q-breadcrumbs").should("contain", "Add Skill")
    })
  })

  context('Profile routes', () => {
    it('routing works for children of profiles ', () => {
      cy.visit('http://localhost:3000/profiles')
      cy.get(".q-breadcrumbs").should("contain", "Profiles")
      cy.visit('http://localhost:3000/profiles/add')
      cy.get(".q-breadcrumbs").should("contain", "Add Profile")
    })
  })
})
