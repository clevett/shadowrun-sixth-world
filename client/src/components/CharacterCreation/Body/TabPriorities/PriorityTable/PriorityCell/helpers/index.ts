import { useRecoilValue } from 'recoil'

import { PRIORITIES, SPECIAL } from '../../../../../../../data'
import { CHARACTER_PRIORITIES } from '../../../../../../../recoil'
import { convertIntIntoNuyen } from '../../../../../helpers'

export const bookMagicString = ( letter: PriorityLetters ) => {
  const specialStrings = PRIORITIES.SPECIAL.map(({name, priorities, attribute}) => {
    return `${name}: ${priorities[letter]} ${attribute}`
  })

  return specialStrings.join(", ")
}

export const GetSpecialColumnText = ( letter: PriorityLetters ) => {
  const special = useRecoilValue(CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_SPECIAL)
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

export const getPriorityAtom = (letter: PriorityLetters) => {
  switch(letter) {
    case "A":
      return CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_A
    case "B":
      return CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_B
    case "C":
      return CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_C
    case "D":
      return CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_D
    case "E":
      return CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_E
  }
}

export const findPriorityKey = (priorities: Priorities<PrioritiesNames>, match: PrioritiesNames) => {
  const keys = PRIORITIES.KEYS as PriorityLetters[]
  return keys.find((key) => priorities[key] === match )
}