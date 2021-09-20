import checkMaxAttributes from "./checkMaxAttributes"

describe("GIVEN checkMaxAttributes is called", () => {
  describe("WHEN passed attributes array", () => {
    const attributes = [
      {
        name: "body",
        adjustment: 0,
        augmented: 0,
        base: 6,
        max: 6,
        min: 1,
      },
      {
        name: "agility",
        adjustment: 0,
        augmented: 0,
        base: 0,
        max: 6,
        min: 0,
      },
      {
        name: "magic",
        adjustment: 0,
        augmented: 0,
        base: 6,
        max: 6,
        min: 0,
      }
    ]

    it("THEN attributes that are at their max", () => {
      const result = checkMaxAttributes(attributes)
      expect( result ).toEqual(["body"])
    })

    it("THEN it does not include special attributes at their max", () => {
      const result = checkMaxAttributes(attributes)
      expect( result ).toEqual(expect.not.arrayContaining(["magic"]))
    })
  })
})
