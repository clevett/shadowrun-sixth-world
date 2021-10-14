import { SPECIAL } from '../../../../../../data'
import getAdjustmentAttributesList from './getAdjustmentAttributesList'

describe("GIVEN getAdjustmentAttributesList is called", () => {
  describe("WHEN special is mundane", () => {
    it("THEN includes metatype max over 6 AND edge", () => {
      const attributes = [
        {
          name: "body",
          min: 1,
          max: 8,
        }
      ]

      const result = getAdjustmentAttributesList( SPECIAL.TYPES.mundane, attributes )
      expect( result ).toEqual(expect.arrayContaining(["body", "edge"]))
    })
  })

  describe("WHEN special is not mundane", () => {
    it("THEN includes metatype max over 6, edge, and special attribute", () => {
      const attributes = [
        {
          name: "body",
          min: 1,
          max: 8,
        },
        {
          name: "strength",
          min: 1,
          max: 8,
        }
      ]

      const result = getAdjustmentAttributesList( SPECIAL.TYPES.full, attributes )
      expect( result ).toEqual(expect.arrayContaining(["body", "strength", "edge", "magic"]))
    })
  })
})