import getAttributesOverSix from "./getAttributesOverSix"

describe("GIVEN getAttributesOverSix is called", () => {
  describe("WHEN attributes with base & name", () => {
    const example = [
      {
        name: "body",
        min: 1,
        max: 6
      },
      {
        name: "edge",
        min: 1,
        max: 3
      },
      {
        name: "strength",
        min: 1,
        max: 7
      }
    ]

    const result = getAttributesOverSix( example )

    it("THEN returns array of core attribute values", () => {
      expect( result ).toEqual(expect.arrayContaining(["strength"]))
    })

    it("THEN returns array that excludes special attributes", () => {
      expect( result ).toEqual(expect.not.arrayContaining(["body", "edge"]))
    })
  })
})