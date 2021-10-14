import { EuiForm, EuiTitle } from '@elastic/eui'
import { useRecoilValue } from 'recoil'

import { ATTRIBUTES } from '../../../../../data'
import { CHARACTER_PRIORITIES, WITH_ATTRIBUTES, WITH_PRIORITIES } from '../../../../../recoil'

import getPriorityValue from "../helpers/getPriorityValue"
import totalAdjustmentValues from '../AttributeBuy/helpers/totalAdjustmentValues'
import Attribute from './Attribute'
import AttributeEdge from './AttributeEdge'
import AttributeSpecial from './AttributeSpecial'

const AdjustmentPointsBuy = () => {
  const metatype = useRecoilValue(CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_METATYPE)
  const attributes = useRecoilValue(WITH_ATTRIBUTES.GET_CHARACTER_ATTRIBUTES) as Attribute[]
  const priorities = useRecoilValue(WITH_PRIORITIES.GET_PRIORITIES)

  let specialAttributes: Attribute[] = []
  metatype.attributes.forEach((metaAttribute) => {
    if(ATTRIBUTES.ATTRIBUTES_LIST.includes( metaAttribute.name ) && metaAttribute.max > 6) {
      const findMetatypeSpecials = attributes.find(attribute => attribute.name === metaAttribute.name)
      findMetatypeSpecials && specialAttributes.push(findMetatypeSpecials)
    }
  })

  const adjustmentPoints = getPriorityValue(priorities)
  const adjustValues = attributes.map(( { name, adjustment } ) => ( { name, adjustment } ))

  const total: number = totalAdjustmentValues( adjustValues )

  const calculatePointsSpent = total === adjustmentPoints
  
  return(
    <EuiForm component="form">
      <EuiTitle size="s">
        <h2>
        {`Adjustment Points (${total} / ${adjustmentPoints})`}
        </h2>
      </EuiTitle>
      {
        attributes.map((attribute) => {
          switch(attribute.name) {
            case "edge":
              return (
                <AttributeEdge
                  attribute={attribute}
                  disableInputs={calculatePointsSpent}
                  key={`adjustment-buy-${attribute.name}`}
                />
              )
            case "magic":
            case "resonance":
              return (
                <AttributeSpecial
                  attribute={attribute}
                  disableInputs={calculatePointsSpent}
                  key={`adjustment-buy-${attribute.name}`}
                />
              )
            default:
              return (
                <Attribute
                  attribute={attribute}
                  disableInputs={calculatePointsSpent}
                  key={`adjustment-buy-${attribute.name}`}
                  adjustableAttributes={specialAttributes}
                />
              )
          }
        })
      }
    </EuiForm>
  )
}

export default AdjustmentPointsBuy

