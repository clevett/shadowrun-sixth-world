import { EuiFormRow, EuiRange, EuiSpacer, EuiText } from '@elastic/eui'
import { useRecoilValue } from "recoil"

import { WITH_ATTRIBUTES, WITH_PRIORITIES } from "../../../../../recoil"
import { METATYPE, PRIORITIES } from '../../../../../data'

import AttributeSelect from './AttributeSelect'
import { findPriorityKey } from "../PriorityTable/PriorityCell/helpers"

import "./styles.sass"

const AttributeBuy = () => {
  const priorities = useRecoilValue(WITH_PRIORITIES.GET_PRIORITIES)
  const attributePriorityLetter = findPriorityKey(priorities, PRIORITIES.OPTIONS.attributes)
  const attributePoints = attributePriorityLetter && PRIORITIES.ATTRIBUTE_POINTS[attributePriorityLetter]

  const spentPoints = useRecoilValue(WITH_ATTRIBUTES.GET_CHARACTER_ATTRIBUTES)
  //@ts-expect-error ignore
  const total: number = Object.values(spentPoints).reduce((a, b) => a + b, 0)

  return (
    <>
      <EuiText size="m">{`Attributes (${total - 8} / ${attributePoints})`}</EuiText>
      <div className="priority-attribute-grid">
        {
          METATYPE.ATTRIBUTES_LIST.map(attribute => {
            return(
              <AttributeSelect 
                attribute={attribute}
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

export default AttributeBuy