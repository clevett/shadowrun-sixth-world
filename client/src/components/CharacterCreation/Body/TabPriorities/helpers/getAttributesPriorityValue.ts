import { findPriorityKey } from "../PriorityTable/PriorityCell/helpers"

import { PRIORITIES } from '../../../../../data';

const getAttributesPriorityValue = (priorities: Priorities<PrioritiesNames>) => {
  const attributePriorityLetter = findPriorityKey(priorities, PRIORITIES.OPTIONS.attributes)
  return attributePriorityLetter && PRIORITIES.ATTRIBUTE_POINTS[attributePriorityLetter]
}

export default getAttributesPriorityValue