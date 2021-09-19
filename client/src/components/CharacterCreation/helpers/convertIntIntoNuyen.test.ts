import convertIntIntoNuyen from "./convertIntIntoNuyen"

describe("GIVEN convertIntIntoNuyen is called", () => {
  describe("WHEN passed a number", () => {
    it("THEN returns a string converted to yen", () => {
      const result = convertIntIntoNuyen(450000)
      expect( result ).toEqual("￥450,000")
    })
  })
})
