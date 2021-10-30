import getAttributesPriorityValue from "./getAttributesPriorityValue"

import { METATYPE, PRIORITIES } from '../../../../../data';

describe("GIVEN getAttributesPriorityValue is called", () => {
  describe("WHEN passed a list of priorities", () => {
    it("THEN returns the priority where the key matches the letter", () => {
      const priorities = {
        A: PRIORITIES.OPTIONS.attributes,
        B: PRIORITIES.OPTIONS.adjustment,
        C: PRIORITIES.OPTIONS.skills,
        D: PRIORITIES.OPTIONS.special,
        E: PRIORITIES.OPTIONS.resources,
      }
      const result = getAttributesPriorityValue( priorities )
      expect( result ).toEqual(24)
    })
  })
})

