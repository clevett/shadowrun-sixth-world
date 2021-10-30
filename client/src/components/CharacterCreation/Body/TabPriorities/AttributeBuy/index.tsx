import { useEffect } from 'react'
import { EuiSpacer, EuiTitle } from '@elastic/eui'
import { useRecoilValue, useSetRecoilState } from "recoil"

import { CHARACTER_ATTRIBUTES, WITH_ATTRIBUTES, WITH_PRIORITIES } from "../../../../../recoil"

import checkMaxAttributes from "./helpers/checkMaxAttributes"
import getAttributesPriorityValue from "../helpers/getAttributesPriorityValue"
import totalBaseValues from "./helpers/totalBaseValues"

import "./styles.sass"
import Attribute from './Attribute'

const AttributeBuy = () => {
  const priorities = useRecoilValue(WITH_PRIORITIES.GET_PRIORITIES)

  const attributes = useRecoilValue(WITH_ATTRIBUTES.GET_CHARACTER_CORE_ATTRIBUTES) as Attribute[]

  const  setAttributeAtMax = useSetRecoilState(CHARACTER_ATTRIBUTES.CHARACTER_ATTRIBUTES_AT_MAX)

  useEffect(() => {
    setAttributeAtMax( checkMaxAttributes(attributes) )
  }, [ attributes, setAttributeAtMax ])

  const baseValues = attributes.map(( { name, base } ) => ( { name, base } )) as AttributesBase[]
  const attributePoints = getAttributesPriorityValue(priorities)

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
          attributes.map(attribute => {
            return (
              <Attribute 
                attribute={attribute}
                disableInputs={calculatePointsSpent}
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