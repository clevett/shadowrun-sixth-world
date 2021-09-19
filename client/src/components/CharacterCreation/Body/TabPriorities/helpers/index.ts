import { findPriorityKey } from "../PriorityTable/PriorityCell/helpers"

import { METATYPE, PRIORITIES } from '../../../../../data';

export const getMetatypeData = (metatype: string) => METATYPE.ATTRIBUTES.find(meta => meta.name === metatype)

export const totalArrayNumbers = (numberArray: number[]) => numberArray.reduce((a: number, b: number) => a + b, 0)

export const getPriorityValue = (priorities: Priorities<PrioritiesNames>) => {
  const attributePriorityLetter = findPriorityKey(priorities, PRIORITIES.OPTIONS.attributes)
  return attributePriorityLetter && PRIORITIES.ATTRIBUTE_POINTS[attributePriorityLetter]
}

