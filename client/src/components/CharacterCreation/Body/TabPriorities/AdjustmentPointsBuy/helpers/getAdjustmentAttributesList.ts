import getSpecialAttribute from './getSpecialAttribute'
import getAttributesOverSix from '../../AttributeBuy/helpers/getAttributesOverSix'


const getAdjustmentAttributesList = (
  special: string | null,
  attributes: MetatypeAttribute[]
) => {
  let attributeList: string[] = []

  if ( special ) {
    const specialAttribute = getSpecialAttribute(special)
    specialAttribute && attributeList.push(specialAttribute)
  }

  getAttributesOverSix(attributes).forEach(attribute => attributeList.push(attribute))

  !attributeList.includes("edge") && attributeList.push("edge")

  return attributeList
}

export default getAdjustmentAttributesList