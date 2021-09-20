import findMaxExceptions from "./findMaxExceptions"

describe("GIVEN findMaxExceptions is called", () => {
  describe("WHEN passed metatype attributes AND an attribute name", () => {
    it("THEN return any attributes it finds", () => {
      const attributes = [
        {
          name: "body",
          max: 8,
          min: 1,
        },
        {
          name: "agility",
          max: 6,
          min: 0,
        },
      ]
      const result = findMaxExceptions(attributes, "agility")
      expect( result ).toEqual(attributes[1])
    })
  })
})