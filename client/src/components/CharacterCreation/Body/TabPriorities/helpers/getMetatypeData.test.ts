import getMetatypeData from "./getMetatypeData"

import { METATYPE } from '../../../../../data';

describe("GIVEN getMetatypeData is called", () => {
  describe("WHEN passed metatype name", () => {
    it("THEN returns the data for metatype", () => {
      const metatype = "human"
      const result = getMetatypeData(metatype)
      expect( result ).toEqual(METATYPE.ATTRIBUTES[0])
    })
  })
})