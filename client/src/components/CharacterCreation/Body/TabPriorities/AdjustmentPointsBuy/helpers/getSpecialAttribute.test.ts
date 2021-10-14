import { SPECIAL } from '../../../../../../data'
import getSpecialAttribute from './getSpecialAttribute'

describe("GIVEN getAdjustmentAttributesList is called WHEN special is not mundane", () => {
  describe("WHEN special is not mundane", () => {
    it("THEN includes special (magic) attribute", () => {
      const result = getSpecialAttribute(SPECIAL.TYPES.full)
      expect( result ).toEqual('magic')
    })

    it("THEN includes special (resonance) attribute", () => {
      const result = getSpecialAttribute(SPECIAL.TYPES.technomancer)
      expect( result ).toEqual('resonance')
    })
  })
})
