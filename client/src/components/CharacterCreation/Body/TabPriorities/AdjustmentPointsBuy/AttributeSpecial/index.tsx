import { useRecoilValue, useSetRecoilState } from 'recoil'

import { PRIORITIES } from '../../../../../../data'
import { CHARACTER_ATTRIBUTES, CHARACTER_PRIORITIES, WITH_PRIORITIES } from '../../../../../../recoil'

import AttributeCounter from '../../AttributeCounter'
import { findPriorityKey } from "../../PriorityTable/PriorityCell/helpers"

const AttributeSpecial = ({
  attribute,
  disableInputs
}: AttributeSpecialProps) => {
  const nameUppercase = attribute.name.toUpperCase()
  const special = useRecoilValue(CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_SPECIAL)
  const setBase = useSetRecoilState<number>( CHARACTER_ATTRIBUTES.base(attribute.name.toUpperCase(), 0) )
  const setAdjustment = useSetRecoilState<number>(CHARACTER_ATTRIBUTES.adjustment(nameUppercase))
  
  const priorities = useRecoilValue(WITH_PRIORITIES.GET_PRIORITIES)
  const priorityLetter = findPriorityKey(priorities, PRIORITIES.OPTIONS.special)

  if(!priorityLetter || priorityLetter === "E" || !special.priorities) {
    setBase(0)
    setAdjustment(0)

    return null
  } 
  
  if (special.attribute === attribute.name) {
    const startingValue = special.priorities[priorityLetter]
    setBase(startingValue)
  } 

  return (
    <AttributeCounter
      atom={`${nameUppercase}_ADJUSTMENT`}
      attribute={(attribute.name as AttributeNames)}
      disableInputs={disableInputs}
    />
  )
}

type AttributeSpecialProps = {
  attribute: Attribute,
  disableInputs: boolean,
}

export default AttributeSpecial