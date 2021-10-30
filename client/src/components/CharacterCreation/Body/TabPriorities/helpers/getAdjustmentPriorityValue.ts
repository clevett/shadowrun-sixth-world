import { findPriorityKey } from "../PriorityTable/PriorityCell/helpers"

import { PRIORITIES } from '../../../../../data';

const getAdjustmentPriorityValue = (priorities: Priorities<PrioritiesNames>) => {
  const priorityLetter = findPriorityKey(priorities, PRIORITIES.OPTIONS.adjustment)
  return priorityLetter && PRIORITIES.ATTRIBUTE_POINTS[priorityLetter]
}

export default getAdjustmentPriorityValue