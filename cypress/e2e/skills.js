const NameInputSelector = "input:first"
const TypeInputSelector = "input:nth(1)"
const SubmitSelector = "button[type='submit']"
const TableSelector = "table"
const TableBottomSelector = ".q-table__bottom"
const EditSelector = ".q-icon.fas.fa-pen-to-square"
const RemoveSelector = ".q-icon.fas.fa-trash-can"
const SearchSelector = "input.q-field__native"

describe('Skills', () => {

  context('Skills behaviour', () => {
    it('should add skill properly', () => {
      cy.visit('http://localhost:3000/skills/add')
      cy.get(NameInputSelector).should("exist")
      cy.get(NameInputSelector).type("test name skill")
      cy.get(TypeInputSelector).should("exist")
      cy.get(TypeInputSelector).type("test type skill")
      cy.get(SubmitSelector).click()
      cy.wait(1000)
      cy.get(TableSelector).should("contain","test name skill")
      cy.get(TableSelector).should("contain","test type skill")
    })

    it('should update skill properly', () => {
      cy.visit('http://localhost:3000/skills')
      cy.get(EditSelector).click()
      cy.wait(1000)
      cy.get(NameInputSelector).should("exist")
      cy.get(NameInputSelector).clear().type("test name skill")
      cy.get(TypeInputSelector).should("exist")
      cy.get(TypeInputSelector).clear().type("test type skill")
      cy.get(SubmitSelector).click()
      cy.wait(1000)
      cy.get(TableSelector).should("contain","test name skill")
      cy.get(TableSelector).should("contain","test type skill")
    })

    it('should remove skill properly', () => {
      cy.visit('http://localhost:3000/skills')
      cy.get(RemoveSelector).click()
      cy.wait(1000)
      cy.get(TableBottomSelector).should("contain","no data found")
    })

    it('should search skill by name and type', () => {
      cy.visit('http://localhost:3000/skills/add')
      cy.get(NameInputSelector).type("test name skill")
      cy.get(TypeInputSelector).type("test type skill")
      cy.get(SubmitSelector).click()
      cy.wait(1000)
      cy.get(TableSelector).should("contain","test name skill")
      cy.get(TableSelector).should("contain","test type skill")
      cy.get(SearchSelector).type("something wrong")
      cy.get(TableBottomSelector).should("contain","No matching records found")
      cy.get(SearchSelector).clear().type("test type skill")
      cy.get(TableSelector).should("contain","test name skill")
      cy.get(TableSelector).should("contain","test type skill")
      cy.get(SearchSelector).clear().type("test name skill")
      cy.get(TableSelector).should("contain","test name skill")
      cy.get(TableSelector).should("contain","test type skill")
    })
  })
})
