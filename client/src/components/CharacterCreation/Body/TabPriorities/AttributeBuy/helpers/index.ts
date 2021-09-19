import { SPECIAL } from "../../../../../../data"
import { totalArrayNumbers } from '../../helpers'

export const checkMaxAttributes = ( attributes: Attribute[] ) => {
  let maxAttributes: string[] = []

  attributes.forEach(attribute => {
    //@ts-expect-error name not being picked up on type
    if(!SPECIAL.ATTRIBUTE_LIST_SPECIAL.includes(attribute.name)) {
      if (attribute.max === attribute.base) {
         //@ts-expect-error name not being picked up on type
        maxAttributes.push(attribute.name)
      }
    }
  })

  return maxAttributes
}

export const getAttributesOverSix = ( metaMinMax: Attributes) => {
  let maxAttributes: string[] = []

  for (const [ key ] of Object.entries(metaMinMax)) {
    //@ts-expect-error ts hates indexing
    if (metaMinMax[key].max > 6 && key !== "edge") {
      maxAttributes.push(key)
    }
  }

  return maxAttributes
}

export const getAttributeValues = ( values: AttributesBase[]) => {
  return values.map(attribute => attribute.base)
}

export const totalBaseValues = ( attributes: AttributesBase[] ) => {
  const intArray = getAttributeValues(attributes)
  return totalArrayNumbers( intArray )
}