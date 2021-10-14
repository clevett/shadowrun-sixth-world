const totalArrayNumbers = (numberArray: number[]) => {
  return numberArray.reduce((a: number, b: number) => a + b, 0)
}

export default totalArrayNumbers