const NameInputSelector = "input:first"
const TypeInputSelector = "input:nth(1)"
const SubmitSelector = "button[type='submit']"
const TableSelector = "table"
const TableBottomSelector = ".q-table__bottom"
const EditSelector = ".q-icon.fas.fa-pen-to-square"
const RemoveSelector = ".q-icon.fas.fa-trash-can"
const SearchSelector = "input.q-field__native"

describe('Profiles', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  context('Profiles behaviour', () => {
    it('should add Profile properly', () => {
      cy.visit('http://localhost:3000/profiles/add')
      cy.get(NameInputSelector).should("exist")
      cy.get(NameInputSelector).type("test first name")
      cy.get(TypeInputSelector).should("exist")
      cy.get(TypeInputSelector).type("test last name")
      cy.get(SubmitSelector).click()
      cy.wait(1000)
      cy.get(TableSelector).should("contain","test first name")
      cy.get(TableSelector).should("contain","test last name")
    })

    it('should update profile properly', () => {
      cy.visit('http://localhost:3000/profiles')
      cy.get(EditSelector).click()
      cy.wait(1000)
      cy.get(NameInputSelector).should("exist")
      cy.get(NameInputSelector).clear().type("test first name")
      cy.get(TypeInputSelector).should("exist")
      cy.get(TypeInputSelector).clear().type("test last name")
      cy.get(SubmitSelector).click()
      cy.wait(1000)
      cy.get(TableSelector).should("contain","test first name")
      cy.get(TableSelector).should("contain","test last name")
    })

    it('should remove profile properly', () => {
      cy.visit('http://localhost:3000/profiles')
      cy.get(RemoveSelector).click()
      cy.wait(1000)
      cy.get(TableBottomSelector).should("contain","no data found")
    })

    it('should search skill by firstName and LastName', () => {
      cy.visit('http://localhost:3000/skills/add')
      cy.get(NameInputSelector).type("test first name")
      cy.get(TypeInputSelector).type("test last name")
      cy.get(SubmitSelector).click()
      cy.wait(1000)
      cy.get(TableSelector).should("contain","test first name")
      cy.get(TableSelector).should("contain","test last name")
      cy.get(SearchSelector).type("something wrong")
      cy.get(TableBottomSelector).should("contain","No matching records found")
      cy.get(SearchSelector).clear().type("test first name")
      cy.get(TableSelector).should("contain","test first name")
      cy.get(TableSelector).should("contain","test last name")
      cy.get(SearchSelector).clear().type("test last name")
      cy.get(TableSelector).should("contain","test first name")
      cy.get(TableSelector).should("contain","test last name")
    })
  })
})
