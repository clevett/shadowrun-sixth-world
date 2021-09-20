import getAttributeValues from "./getAttributeValues"

describe("GIVEN getAttributeValues is called", () => {
  describe("WHEN attributes with base & name", () => {
    const example = [
      {
        name: "body",
        base: 6
      },
      {
        name: "edge",
        base: 3
      },
      {
        name: "strength",
        base: 7
      },
      {
        name: "magic",
        base: 5
      }
    ]

    const result = getAttributeValues( example )

    it("THEN returns array of core attribute values", () => {
      expect( result ).toEqual(expect.arrayContaining([6, 7]))
    })

    it("THEN returns array that excludes special attributes", () => {
      expect( result ).toEqual(expect.not.arrayContaining([3, 5]))
    })
  })
})