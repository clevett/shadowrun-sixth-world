import { SPECIAL, METATYPE } from '../../../../../../data'
import { attributeFactory } from '../../../../../../data/helpers'
import { ATTRIBUTES_DEFAULTS } from '../../../../../../data/metatype'

import { 
  getAdjustmentAttributesList,
  getSpecialAttribute
} from "./index"

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

describe("GIVEN getAdjustmentAttributesList is called", () => {
  describe("WHEN special is mundane", () => {
    it("THEN includes metatype max over 6 AND edge", () => {
      const attributes = {
        ...ATTRIBUTES_DEFAULTS,
        body: attributeFactory(8),
      }

      const result = getAdjustmentAttributesList(SPECIAL.TYPES.mundane, attributes )
      expect( result ).toEqual(expect.arrayContaining(["body", "edge"]))
    })
  })

  describe("WHEN special is not mundane", () => {
    it("THEN includes metatype max over 6, edge, and special attribute", () => {
      const attributes = {
        ...ATTRIBUTES_DEFAULTS,
        body: attributeFactory(8),
        strength: attributeFactory(8),
      }

      const result = getAdjustmentAttributesList(SPECIAL.TYPES.full, attributes )
      expect( result ).toEqual(expect.arrayContaining(["body", "strength", "edge", "magic"]))
    })
  })
})