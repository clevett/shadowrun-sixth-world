import { EuiSpacer, EuiTitle } from '@elastic/eui'
import { useRecoilValue } from "recoil"

import { WITH_ATTRIBUTES, WITH_PRIORITIES } from "../../../../../recoil"
import { METATYPE } from '../../../../../data'

import AttributeCounter from '../AttributeCounter'
import { getPriorityValue, totalArrayNumbers } from "../helpers"
import { checkMaxAttributes } from "./helpers"

import "./styles.sass"

const AttributeBuy = ({
  attributes
}: AttributeBuyProps) => {
  const priorities = useRecoilValue(WITH_PRIORITIES.GET_PRIORITIES)
  const attributePoints = getPriorityValue(priorities)
  const characterAttributesValues = useRecoilValue(WITH_ATTRIBUTES.GET_CHARACTER_ATTRIBUTES)

  if(!attributePoints) {
    return null
  }

  const maxAttributes = checkMaxAttributes(attributes, characterAttributesValues)

  const total: number = totalArrayNumbers( Object.values(characterAttributesValues) as number[] )
  const totalMinusEight = total - 8

  const calculatePointsSpent = totalMinusEight === attributePoints

  return (
    <>
      <EuiTitle size="s">
        <h2>
          {`Attributes (${totalMinusEight} / ${attributePoints})`}
        </h2>
      </EuiTitle>
      <div>
        {
          METATYPE.ATTRIBUTES_LIST.map(attribute => {
            return(
              <AttributeCounter 
                attribute={(attribute as AttributeNames)}
                disableInputs={calculatePointsSpent}
                key={`attribute-buy-${attribute}`}
                minMax={attributes[attribute]}
                maxed={maxAttributes.length > 1 && maxAttributes.includes(attribute)}
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
  attributes: Attributes
}

export default AttributeBuy