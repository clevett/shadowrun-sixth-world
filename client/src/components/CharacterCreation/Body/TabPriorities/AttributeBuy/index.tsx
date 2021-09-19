import { useEffect } from 'react'
import { EuiSpacer, EuiTitle } from '@elastic/eui'
import { useRecoilState, useRecoilValue } from "recoil"

import { CHARACTER_ATTRIBUTES, CHARACTER_PRIORITIES, WITH_ATTRIBUTES, WITH_PRIORITIES } from "../../../../../recoil"

import AttributeCounter from '../AttributeCounter'
import getPriorityValue from "../helpers/getPriorityValue"
import totalBaseValues from "./helpers/totalBaseValues"

import checkMaxAttributes from "./helpers/checkMaxAttributes"


import "./styles.sass"
import { ATTRIBUTES } from '../../../../../data'

const AttributeBuy = () => {
  const metatype = useRecoilValue(CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_METATYPE)
  const priorities = useRecoilValue(WITH_PRIORITIES.GET_PRIORITIES)

  const attributes = useRecoilValue(WITH_ATTRIBUTES.GET_CHARACTER_ATTRIBUTES) as Attribute[]
  const filterSpecialAttributes = attributes.filter(attribute => !ATTRIBUTES.ADJUSTMENT_LIST.includes(attribute.name) )
  
  const [ attributeAtMax, setAttributeAtMax ] = useRecoilState(CHARACTER_ATTRIBUTES.CHARACTER_ATTRIBUTES_AT_MAX)

  useEffect(() => {
    setAttributeAtMax( checkMaxAttributes(attributes) )
  }, [ attributes, setAttributeAtMax ])

  const baseValues = attributes.map(( { name, base } ) => ( { name, base } )) as AttributesBase[]
  const attributePoints = getPriorityValue(priorities)

  if(!attributePoints) {
    return null
  }

  const total: number = totalBaseValues( baseValues ) - 8

  const calculatePointsSpent = total === attributePoints

  return (
    <>
      <EuiTitle size="s">
        <h2>
          {`Attributes (${total} / ${attributePoints})`}
        </h2>
      </EuiTitle>
      <div>
        {
          filterSpecialAttributes.map(attribute => {
            const findMaxExceptions = metatype.attributes.find(metaAttribute => metaAttribute.name === attribute.name )
            const max = findMaxExceptions && findMaxExceptions.name !== "edge" && findMaxExceptions.max

            return(
              <AttributeCounter
                atom={`${attribute.name.toUpperCase()}_BASE`}
                attribute={(attribute.name as AttributeNames)}
                disableInputs={calculatePointsSpent}
                key={`attribute-buy-${attribute.name}`}
                metaMax={max ? max : attribute.max}
                metaMin={attribute.min}
                maxed={attributeAtMax.length > 1 && attributeAtMax.includes(attribute.name)}
              />
            )
          } )
        }
      </div>

      <EuiSpacer />

    </>
  )
}

export default AttributeBuy