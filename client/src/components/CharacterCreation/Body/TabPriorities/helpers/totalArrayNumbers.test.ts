import totalArrayNumbers from './totalArrayNumbers'

describe("GIVEN totalArrayNumbers is called", () => {
  describe("WHEN passed array numbers", () => {
    it("THEN returns the data for metatype", () => {
      const result = totalArrayNumbers([1, 2, 3, 4, 5])
      expect( result ).toEqual(15)
    })
  })
})