import { EuiSpacer, EuiTitle } from '@elastic/eui'
import { useRecoilValue } from "recoil"

import { WITH_ATTRIBUTES, WITH_PRIORITIES } from "../../../../../recoil"
import { METATYPE } from '../../../../../data'

import AttributeCounter from './AttributeCounter'
import { getPriorityValue, totalArrayNumbers } from "../helpers"

import "./styles.sass"

const AttributeBuy = ({
  metatypeData
}: AttributeBuyProps) => {
  const priorities = useRecoilValue(WITH_PRIORITIES.GET_PRIORITIES)
  const attributePoints = getPriorityValue(priorities)
  const spentPoints = useRecoilValue(WITH_ATTRIBUTES.GET_CHARACTER_ATTRIBUTES)

  console.table({
    attributePoints,
    spentPoints
  })

  if(!attributePoints || !metatypeData) {
    return null
  }

  const total: number = totalArrayNumbers( Object.values(spentPoints) as number[] )
  console.log(total)
  const calculatePointsSpent = total - 8 === attributePoints

  return (
    <>
      <EuiTitle size="s">
        <h2>
          {`Attributes (${total - 8} / ${attributePoints})`}
        </h2>
      </EuiTitle>
      <div>
        {
          METATYPE.ATTRIBUTES_LIST.map(attribute => {
            return(
              <AttributeCounter 
                attribute={attribute}
                disableInputs={calculatePointsSpent}
                key={`attribute-buy-${attribute}`}
              />
            )
          } )
        }
      </div>

      <EuiSpacer />

    </>
  )
}

type AttributeBuyProps = {
  metatypeData?: Metatype
}

export default AttributeBuy