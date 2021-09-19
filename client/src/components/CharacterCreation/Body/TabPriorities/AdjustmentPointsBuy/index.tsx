import { EuiForm, EuiText } from '@elastic/eui'
import { useRecoilValue } from 'recoil'

import { PRIORITIES, SPECIAL } from '../../../../../data'
import { WITH_ATTRIBUTES, WITH_PRIORITIES } from '../../../../../recoil'
import { checkMaxAttributes, getAttributesOverSix } from '../AttributeBuy/helpers'
import AttributeCounter from '../AttributeCounter'

import { findPriorityKey } from "../PriorityTable/PriorityCell/helpers"

const AdjustmentPointsBuy = ({
  attributes,
  adjustmentPoints,
  special
}: AdjustmentPointsBuyProps) => {
  const priorities = useRecoilValue(WITH_PRIORITIES.GET_PRIORITIES)
  const characterAttributesValues = useRecoilValue(WITH_ATTRIBUTES.GET_CHARACTER_ATTRIBUTES)

  const adjustmentPriorityLetter = findPriorityKey(priorities, PRIORITIES.OPTIONS.adjustment)
  const points = adjustmentPriorityLetter && PRIORITIES.ADJUSTMENT_POINTS[adjustmentPriorityLetter]

  const maxAttributes = checkMaxAttributes(attributes, characterAttributesValues)

  let attributeList = ["edge"]

  if (special !== SPECIAL.TYPES.mundane) {
    const specialType = PRIORITIES.SPECIAL.find(specialType => specialType.name === special)
    specialType && attributeList.push(specialType.attribute)
  }

  getAttributesOverSix(attributes).forEach(attribute => attributeList.push(attribute))
  
  return(
    <EuiForm component="form">
      <EuiText size="m">{`Adjustment Points (0 / ${points})`}</EuiText>
      {
        attributeList.map((attribute) => {
          return(
            <AttributeCounter
              attribute={(attribute as AttributeNames)}
              key={`attribute-buy-${attribute}`}
              minMax={attributes[(attribute as AttributeNames)]}
              maxed={maxAttributes.length > 1 && maxAttributes.includes(attribute)}
            />
          )
        } )
      }
    </EuiForm>
  )
}

type AdjustmentPointsBuyProps = { 
  attributes: Attributes,
  adjustmentPoints: keyof Metatype,
  special: string
}

export default AdjustmentPointsBuy

