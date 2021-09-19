import { useEffect } from 'react'
import { EuiSpacer, EuiTitle } from '@elastic/eui'
import { useRecoilState, useRecoilValue } from "recoil"

import { CHARACTER_ATTRIBUTES, WITH_ATTRIBUTES, WITH_PRIORITIES } from "../../../../../recoil"
import { METATYPE } from '../../../../../data'

import AttributeCounter from '../AttributeCounter'
import { getPriorityValue } from "../helpers"
import { checkMaxAttributes, totalBaseValues } from "./helpers"

import "./styles.sass"

const AttributeBuy = ({
  attributes
}: AttributeBuyProps) => {
  const priorities = useRecoilValue(WITH_PRIORITIES.GET_PRIORITIES)
  const allAttributes = useRecoilValue(WITH_ATTRIBUTES.GET_CHARACTER_ATTRIBUTES) as Attribute[]
  const [ maxAttributes, setMaxAttributes ] = useRecoilState(CHARACTER_ATTRIBUTES.CHARACTER_ATTRIBUTES_AT_MAX)

  useEffect(() => {
    setMaxAttributes( checkMaxAttributes(allAttributes) )
  }, [ allAttributes, setMaxAttributes ])

  const baseValues = allAttributes.map(( { name, base } ) => ( { name, base } )) as AttributesBase[]
  const attributePoints = getPriorityValue(priorities)

  if(!attributePoints) {
    return null
  }

  const total: number = totalBaseValues( baseValues )
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
                atom={`${attribute.toUpperCase()}_BASE`}
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