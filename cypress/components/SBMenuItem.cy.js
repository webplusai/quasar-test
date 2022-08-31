import SBMenuItem from "../../src/components/common/layout/SBMenuItem.vue"
import {Quasar} from "quasar";

/** define all classes in the top **/
const MenuItemSelector = ".menu-item"
/** define props object in the top so that it gets directly visible which props
 *  are being tested **/

/** define slots object in the top so that it gets directly visible which slots
 *  are being tested **/

const slots = { default: () => "slot content" }

const global =  { plugins: [Quasar] }

describe('SBMenuItem', () => {
  context('renders correctly without props', () => {
    it('renders correctly without props', () => {

      cy.mount(SBMenuItem, {
        global
      })
      cy.get(MenuItemSelector).should("exist")
    })
  })

  context('renders slots correctly', () => {
    it('should mount and display the slots content inside the component', () => {
      cy.mount(SBMenuItem, {
        slots: {...slots},
        global
      })
      cy.get(MenuItemSelector).should("exist")
    })
  })
})
