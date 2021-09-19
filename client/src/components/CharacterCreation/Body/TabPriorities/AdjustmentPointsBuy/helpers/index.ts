import { PRIORITIES, SPECIAL } from '../../../../../../data'
import getAttributesOverSix from '../../AttributeBuy/helpers/getAttributesOverSix'

export const getSpecialAttribute = ( special: string ) => {
  if (special !== SPECIAL.TYPES.mundane) {
    const specialType = PRIORITIES.SPECIAL.find(specialType => specialType.name === special)
    return specialType?.attribute
  }
}

export const getAdjustmentAttributesList = (
  special: string,
  attributes: MetatypeAttribute[]
) => {
  let attributeList: string[] = []

  const specialAttribute = getSpecialAttribute(special)
  specialAttribute && attributeList.push(specialAttribute)

  getAttributesOverSix(attributes).forEach(attribute => attributeList.push(attribute))

  !attributeList.includes("edge") && attributeList.push("edge")

  return attributeList
}