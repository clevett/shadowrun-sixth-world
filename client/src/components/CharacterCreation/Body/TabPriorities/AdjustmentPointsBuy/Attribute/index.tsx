import { useSetRecoilState } from 'recoil'

import { CHARACTER_ATTRIBUTES } from '../../../../../../recoil'
import AttributeCounter from '../../AttributeCounter'

const Attribute = ({
  attribute,
  disableInputs,
  adjustableAttributes
}: AttributeProps) => {
  const setAdjustment = useSetRecoilState<number>( CHARACTER_ATTRIBUTES.adjustment(attribute.name.toUpperCase()) )

  const adjustableAttributeNames = adjustableAttributes.map(attribute => attribute.name)

  if(!adjustableAttributes.length || !adjustableAttributeNames.includes(attribute.name)) {
    setAdjustment(0)
    return null
  }

  return (
    <AttributeCounter
      atom={`${attribute.name.toUpperCase()}_ADJUSTMENT`}
      attribute={(attribute.name as AttributeNames)}
      disableInputs={disableInputs}
    />
  )
}

type AttributeProps = {
  attribute: Attribute,
  disableInputs: boolean,
  adjustableAttributes: Attribute[]
}

export default Attribute