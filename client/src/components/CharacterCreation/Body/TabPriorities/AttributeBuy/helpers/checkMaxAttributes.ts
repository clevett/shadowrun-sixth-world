import { ATTRIBUTES } from '../../../../../../data'

const checkMaxAttributes = ( attributes: Attribute[] ) => {
  let maxAttributes: string[] = []

  attributes.forEach(attribute => {
    if(!ATTRIBUTES.ADJUSTMENT_LIST.includes(attribute.name)) {
      if (attribute.max === attribute.base) {
        maxAttributes.push(attribute.name)
      }
    }
  })

  return maxAttributes
}

export default checkMaxAttributes