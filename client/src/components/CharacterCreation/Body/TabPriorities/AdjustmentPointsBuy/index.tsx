import { EuiForm, EuiText } from '@elastic/eui'
import { useRecoilValue } from 'recoil'

import { ATTRIBUTES, PRIORITIES } from '../../../../../data'
import { 
  CHARACTER_ATTRIBUTES, 
  CHARACTER_PRIORITIES, 
  WITH_PRIORITIES 
} from '../../../../../recoil'

import AttributeCounter from '../AttributeCounter'
import { findPriorityKey } from "../PriorityTable/PriorityCell/helpers"
import getAdjustmentAttributesList from "./helpers/getAdjustmentAttributesList"

const AdjustmentPointsBuy = () => {
  const special = useRecoilValue(CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_SPECIAL)
  const metatype = useRecoilValue(CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_METATYPE)

  const priorities = useRecoilValue(WITH_PRIORITIES.GET_PRIORITIES)
  const maxAttributes = useRecoilValue(CHARACTER_ATTRIBUTES.CHARACTER_ATTRIBUTES_AT_MAX)
  const adjustmentPriorityLetter = findPriorityKey(priorities, PRIORITIES.OPTIONS.adjustment)
  const points = adjustmentPriorityLetter && PRIORITIES.ADJUSTMENT_POINTS[adjustmentPriorityLetter]

  const attributeList = getAdjustmentAttributesList(special, metatype.attributes)
  
  return(
    <EuiForm component="form">
      <EuiText size="m">{`Adjustment Points (0 / ${points})`}</EuiText>
      {
        attributeList.map((attribute) => {
          const findMaxExceptions = metatype.attributes.find(metaAttribute => metaAttribute.name === attribute )
          const max = findMaxExceptions && !ATTRIBUTES.ATTRIBUTES_LIST.includes(findMaxExceptions.name) && findMaxExceptions.max

          return(
            <AttributeCounter
              atom={`${attribute.toUpperCase()}_ADJUSTMENT`}
              attribute={(attribute as AttributeNames)}
              key={`attribute-buy-${attribute}`}
              metaMax={max ? max : 6}
              metaMin={1}
              maxed={maxAttributes.length > 1 && maxAttributes.includes(attribute)}
            />
          )
        } )
      }
    </EuiForm>
  )
}

export default AdjustmentPointsBuy

