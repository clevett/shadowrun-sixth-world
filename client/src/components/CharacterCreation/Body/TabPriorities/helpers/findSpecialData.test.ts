import { SPECIAL } from '../../../../../data'
import findSpecialData from "./findSpecialData"

describe("GIVEN findSpecialData is called", () => {
  describe("WHEN name of special attribute", () => {
    it("THEN return data for that special attribute", () => {
      const result = findSpecialData(SPECIAL.TYPES.full)
      expect( result ).toEqual(SPECIAL.ATTRIBUTES[0])
    })
  })
})