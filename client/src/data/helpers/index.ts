export const maxMinFactory = (max = 6, min = 1) => {
  return {
    max,
    min
  }
}

export const attributeFactory = ( max = 6, min = 1) => {
  return {
    adjustment: 0,
    augmented: 0,
    base: 1,
    ...maxMinFactory(max, min)
  }
}

