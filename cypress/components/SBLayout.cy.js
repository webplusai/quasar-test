import SBLayout from "../../src/components/common/layout/SBLayout.vue"
import { Quasar } from 'quasar'
/** define all classes in the top **/
const LayoutSelector= ".main-layout"
/** define props object in the top so that it gets directly visible which props
 *  are being tested **/

/** define slots object in the top so that it gets directly visible which slots
 *  are being tested **/
const slots = { default: () => "slot content" }

const global =  { plugins: [Quasar] }

describe('SBLayout', () => {
  context('renders correctly without props', () => {
    it('should mount properly without props', () => {
      cy.mount(SBLayout, {
        global
      })
      cy.get(LayoutSelector).should("exist")
    })
  })

  context('renders slots correctly', () => {
    it('should mount and display the slots content inside the component', () => {
      cy.mount(SBLayout, {
        slots: {...slots},
        global: {
          plugins: [Quasar]
        },
      })
      cy.get(LayoutSelector).should("exist")
      cy.get(LayoutSelector).should("contain", slots.default())
    })
  })
})
