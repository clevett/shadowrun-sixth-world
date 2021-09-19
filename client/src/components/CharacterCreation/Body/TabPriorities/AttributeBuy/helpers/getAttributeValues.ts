import { ATTRIBUTES } from '../../../../../../data'

const getAttributeValues = ( values: AttributesBase[]) => {
  const filterOutSpecial = values.filter(attribute => ATTRIBUTES.ATTRIBUTES_LIST.includes(attribute.name))
  return filterOutSpecial.map(attribute => attribute.base)
}

export default getAttributeValues