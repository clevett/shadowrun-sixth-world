import { useRecoilValue, useSetRecoilState } from 'recoil'
import { CHARACTER_ATTRIBUTES, CHARACTER_PRIORITIES } from '../../../../../../recoil'
import AttributeCounter from '../../AttributeCounter'
import findMaxExceptions from '../../helpers/findMaxExceptions'

const Attribute = ({
  attribute,
  disableInputs
}: AttributeProps) => {
  const { attributes } = useRecoilValue(CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_METATYPE)
  const setMax = useSetRecoilState<number>( CHARACTER_ATTRIBUTES.max(attribute.name.toUpperCase()) )

  const exceptions = findMaxExceptions( attributes, attribute.name )
  const max = exceptions && exceptions.name !== "edge" && exceptions.max
  setMax(max ? max : 6)

  return (
    <AttributeCounter
      atom={`${attribute.name.toUpperCase()}_BASE`}
      attribute={(attribute.name as AttributeNames)}
      disableInputs={disableInputs}
      key={`attribute-buy-${attribute.name}`}
    />
  )
}

type AttributeProps = {
  attribute: Attribute,
  disableInputs: boolean,
}

export default Attribute