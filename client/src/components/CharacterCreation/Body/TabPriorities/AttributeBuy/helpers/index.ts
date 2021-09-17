export const checkMaxAttributes = (metaMinMax: Attributes, characterAttributes: AttributesCore) => {
  let maxAttributes: string[] = []

  for (const [key, value] of Object.entries(characterAttributes)) {

    //@ts-expect-error ts hates indexing
    if (metaMinMax[key].max === value) {
      maxAttributes.push(key)
    }
  }

  return maxAttributes
}