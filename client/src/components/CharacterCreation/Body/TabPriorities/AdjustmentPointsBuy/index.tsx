import { EuiForm, EuiTitle } from '@elastic/eui'
import { useRecoilValue } from 'recoil'

import { ATTRIBUTES, PRIORITIES } from '../../../../../data'
import { 
  CHARACTER_ATTRIBUTES, 
  CHARACTER_PRIORITIES, 
  WITH_ATTRIBUTES, 
  WITH_PRIORITIES 
} from '../../../../../recoil'

import AttributeCounter from '../AttributeCounter'
import { findPriorityKey } from "../PriorityTable/PriorityCell/helpers"
import getAdjustmentAttributesList from "./helpers/getAdjustmentAttributesList"
import findMaxExceptions from "../helpers/findMaxExceptions"
import totalAdjustmentValues from '../AttributeBuy/helpers/totalAdjustmentValues'

const AdjustmentPointsBuy = () => {
  const special = useRecoilValue(CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_SPECIAL)
  const metatype = useRecoilValue(CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_METATYPE)

  const priorities = useRecoilValue(WITH_PRIORITIES.GET_PRIORITIES)
  const adjustmentPriorityLetter = findPriorityKey(priorities, PRIORITIES.OPTIONS.adjustment)
  const adjustmentPoints = adjustmentPriorityLetter && PRIORITIES.ADJUSTMENT_POINTS[adjustmentPriorityLetter]

  const maxAttributes = useRecoilValue(CHARACTER_ATTRIBUTES.CHARACTER_ATTRIBUTES_AT_MAX)

  const attributeList = getAdjustmentAttributesList(special.name, metatype.attributes)

  const attributes = useRecoilValue(WITH_ATTRIBUTES.GET_CHARACTER_ATTRIBUTES) as Attribute[]
  const adjustValues = attributes.map(( { name, adjustment } ) => ( { name, adjustment } ))

  const total: number = totalAdjustmentValues( adjustValues ) - 1

  const calculatePointsSpent = total === adjustmentPoints
  
  return(
    <EuiForm component="form">
      <EuiTitle size="s">
        <h2>
        {`Adjustment Points (${total} / ${adjustmentPoints})`}
        </h2>
      </EuiTitle>
      {
        attributeList.map((attribute) => {
          const exceptions = findMaxExceptions(metatype.attributes, attribute)
          const max = exceptions && !ATTRIBUTES.ATTRIBUTES_LIST.includes(exceptions.name) && exceptions.max

          return(
            <AttributeCounter
              atom={`${attribute.toUpperCase()}_ADJUSTMENT`}
              attribute={(attribute as AttributeNames)}
              disableInputs={calculatePointsSpent}
              key={`adjustment-buy-${attribute}`}
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

