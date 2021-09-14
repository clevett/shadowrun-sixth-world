import { useRecoilValue } from 'recoil'

import { PRIORITIES, SPECIAL } from '../../../../../../data'
import { CHARACTER_CREATION_PRIORITIES_SPECIAL } from '../../../../../../recoil'

export const GetSpecialColumnText = ( letter: PriorityLetters ) => {
  const special = useRecoilValue(CHARACTER_CREATION_PRIORITIES_SPECIAL)
  const findSpecial = PRIORITIES.SPECIAL.find(priority => priority.name === special)

  if (letter === "E") {
    return SPECIAL.TYPES.mundane
  }

  if (findSpecial) {
    const { priorities, attribute } = findSpecial

    return `${priorities[letter]} ${attribute}`
  } else {
    const defaultStringBuilder = () => {
      let specialStrings: string[] = []

      PRIORITIES.SPECIAL.forEach(({name, priorities, attribute}) => {
        specialStrings.push(`${name}: ${priorities[letter]} ${attribute}`)
      })

      return specialStrings.join(", ")
    }

    return defaultStringBuilder()
  }
}

export const findPriorityByLetter = (letter: PriorityLetters) => {
  return PRIORITIES.VALUES.find(priority => priority.name === letter)
}

//@ts-expect-error Not yet typed
export const getSpecialText = (special, value) => {
  return special === SPECIAL.TYPES.aspected ? 
    value[SPECIAL.TYPES.aspected] 
    : value.default
}