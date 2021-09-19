import { EuiForm, EuiText } from '@elastic/eui'
import { useRecoilValue } from 'recoil'

import { PRIORITIES } from '../../../../../data'
import { WITH_PRIORITIES } from '../../../../../recoil'
import AttributeCounter from '../AttributeCounter'

import { findPriorityKey } from "../PriorityTable/PriorityCell/helpers"

import { getAdjustmentAttributesList } from "./helpers"

const AdjustmentPointsBuy = ({
  attributes,
  special
}: AdjustmentPointsBuyProps) => {
  const priorities = useRecoilValue(WITH_PRIORITIES.GET_PRIORITIES)
  const adjustmentPriorityLetter = findPriorityKey(priorities, PRIORITIES.OPTIONS.adjustment)
  const points = adjustmentPriorityLetter && PRIORITIES.ADJUSTMENT_POINTS[adjustmentPriorityLetter]

  const attributeList = getAdjustmentAttributesList(special, attributes)

  console.log(attributeList)

  //const maxAttributes = checkMaxAttributes(allAttributes)
  //@ts-ignore
  const maxAttributes = []
  
  return(
    <EuiForm component="form">
      <EuiText size="m">{`Adjustment Points (0 / ${points})`}</EuiText>
      {
        attributeList.map((attribute) => {
          const defaultMinMax = attributes[(attribute as AttributeNames)]
          console.log(defaultMinMax)
          return(
            <AttributeCounter
              atom={`${attribute.toUpperCase()}_ADJUSTMENT`}
              attribute={(attribute as AttributeNames)}
              key={`attribute-buy-${attribute}`}
              minMax={attributes[(attribute as AttributeNames)]}
              //@ts-ignore
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

