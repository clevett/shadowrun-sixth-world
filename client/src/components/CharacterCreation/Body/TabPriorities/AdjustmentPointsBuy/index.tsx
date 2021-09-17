import { EuiForm, EuiText } from '@elastic/eui'
import { useRecoilValue } from 'recoil'

import { METATYPE, PRIORITIES } from '../../../../../data'
import { WITH_PRIORITIES } from '../../../../../recoil'

import { findPriorityKey } from "../PriorityTable/PriorityCell/helpers"

const AdjustmentPointsBuy = ({
  metatypeData
}: { metatypeData: Metatype }) => {
  const priorities = useRecoilValue(WITH_PRIORITIES.GET_PRIORITIES)
  const adjustmentPriorityLetter = findPriorityKey(priorities, PRIORITIES.OPTIONS.adjustment)
  const adjustmentPoints = adjustmentPriorityLetter && PRIORITIES.ADJUSTMENT_POINTS[adjustmentPriorityLetter]

  return(
    <EuiForm component="form">
      <EuiText size="m">{`Adjustment Points (0 / ${adjustmentPoints})`}</EuiText>
      {
        //METATYPE.ATTRIBUTE_LIST_SPECIAL.map(attribute => getSelect(attribute) )
        METATYPE.ATTRIBUTE_LIST_SPECIAL
      }
    </EuiForm>
  )
}

export default AdjustmentPointsBuy

