import { useRecoilValue } from 'recoil'

import { PRIORITIES, SPECIAL } from '../../../../../../../data'
import { CHARACTER_CREATION_PRIORITIES_SPECIAL } from '../../../../../../../recoil'
import { convertIntIntoNuyen } from '../../../../../helpers'

export const bookMagicString = ( letter: PriorityLetters ) => {
  const specialStrings = PRIORITIES.SPECIAL.map(({name, priorities, attribute}) => {
    return `${name}: ${priorities[letter]} ${attribute}`
  })

  return specialStrings.join(", ")
}

export const GetSpecialColumnText = ( letter: PriorityLetters ) => {
  const special = useRecoilValue(CHARACTER_CREATION_PRIORITIES_SPECIAL)
  const findSpecial = PRIORITIES.SPECIAL.find(priority => priority.name === special)

  if (letter === "E") {
    return SPECIAL.TYPES.mundane
  }

  if (findSpecial) {
    const { priorities, attribute } = findSpecial
    return `${priorities[letter]} ${attribute}`
  }

  return "-"
}

export const findPriorityByLetter = (letter: PriorityLetters) => {
  return PRIORITIES.VALUES.find(priority => priority.name === letter)
}

export const getPriorityValue = (columnName: PrioritiesNames, letter: PriorityLetters) => {
  const priorityValues = findPriorityByLetter(letter)
  return priorityValues && priorityValues[`${columnName}`]
}

export const getRowValue = (columnName: PrioritiesNames, letter: PriorityLetters) => {
  if (columnName === PRIORITIES.OPTIONS.special) {
    return GetSpecialColumnText(letter)
  }

  const priorityValue = getPriorityValue(columnName, letter)
  if (!priorityValue) {
    return "Unable find value"
  }

  if (columnName === PRIORITIES.OPTIONS.resources ) {
    return convertIntIntoNuyen(priorityValue) 
  }

  return priorityValue
}