import SBTable from "../../src/components/common/SBTable.vue"
import {Quasar} from "quasar";

/** define all classes in the top **/
const TableSelector = "table"
/** define props object in the top so that it gets directly visible which props
 *  are being tested **/

const columns = [
  {
    name: 'column1',
    label: 'column1',
    field: 'column1',
    align: 'left',
  },
  {
    name: 'column2',
    label: 'column2',
    field: 'column2',
    align: 'left',
  },
  {
    name: 'actions',
    label: 'Actions',
    field: 'actions',
    align: 'right',
  },
]
const data = [{column1:"test 1", column2:"test 2", }]
const props = {
  columns,
  data,
}

/** define slots object in the top so that it gets directly visible which slots
 *  are being tested **/

const global =  { plugins: [Quasar] }

describe('SBTable', () => {
  it('renders properly with minimum props', () => {
    cy.mount(SBTable, {
      props: {...props},
      global
    })
    cy.get(TableSelector).should("contain", "column1")
    cy.get(TableSelector).should("contain", "column2")
    cy.get(TableSelector).should("contain", "test 1")
    cy.get(TableSelector).should("contain", "test 2")
  })
})
