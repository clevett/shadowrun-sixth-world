const getAttributesOverSix = ( metaMinMax: MetatypeAttribute[]) => {
  let maxAttributes: string[] = []

  metaMinMax.forEach(attribute => {
    if (attribute.max > 6 && attribute.name !== "edge") {
      maxAttributes.push(attribute.name)
    }
  })
  
  return maxAttributes
}

export default getAttributesOverSix