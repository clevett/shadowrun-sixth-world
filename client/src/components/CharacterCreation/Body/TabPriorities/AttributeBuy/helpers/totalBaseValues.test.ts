import totalBaseValues from "./totalBaseValues"

describe("GIVEN totalBaseValues is called", () => {
  describe("WHEN attributes with base & max", () => {
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

    const result = totalBaseValues( example )

    it("THEN totals the core values", () => {
      expect( result ).toEqual(13)
    })

  })
})