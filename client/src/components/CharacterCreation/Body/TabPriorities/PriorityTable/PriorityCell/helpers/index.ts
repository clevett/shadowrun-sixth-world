import { useRecoilValue } from 'recoil'

import { PRIORITIES, SPECIAL } from '../../../../../../../data'
import { 
  CHARACTER_CREATION_PRIORITIES_A,
  CHARACTER_CREATION_PRIORITIES_B,
  CHARACTER_CREATION_PRIORITIES_C,
  CHARACTER_CREATION_PRIORITIES_D,
  CHARACTER_CREATION_PRIORITIES_E,
  CHARACTER_CREATION_PRIORITIES_SPECIAL 
} from '../../../../../../../recoil'
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

export const getPriorityAtom = (letter: PriorityLetters) => {
  switch(letter) {
    case "A":
      return CHARACTER_CREATION_PRIORITIES_A
    case "B":
      return CHARACTER_CREATION_PRIORITIES_B
    case "C":
      return CHARACTER_CREATION_PRIORITIES_C
    case "D":
      return CHARACTER_CREATION_PRIORITIES_D
    case "E":
      return CHARACTER_CREATION_PRIORITIES_E
  }
}

export const getPreviousKey = (priorities: Priorities<PrioritiesNames>, match: PrioritiesNames) => {
  const keys = PRIORITIES.KEYS as PriorityLetters[]
  return keys.find((key) => priorities[key] === match )
}