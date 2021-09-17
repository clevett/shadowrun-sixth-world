import { EuiButtonIcon, EuiText } from '@elastic/eui'
import { useRecoilValue, useRecoilState } from 'recoil'

import { ATOM, CHARACTER_PRIORITIES } from '../../../../../../recoil'
import { getMetatypeData } from '../../helpers'

import "./styles.sass"

const AttributeCounter = ({
  attribute,
  disableInputs
}: AttributeSelectProps) => {
  const metatype = useRecoilValue(CHARACTER_PRIORITIES.CHARACTER_CREATION_PRIORITY_METATYPE)
  const [score, setScore] = useRecoilState<number>(ATOM.characterAttribute(`${attribute.toUpperCase()}`))

  const metatypeData =  getMetatypeData(metatype)

  if ( !metatypeData ) {
    return null
  }

  const { min, max } = metatypeData.attributes[attribute] 
  const maxIsLessThanEqualSix = max <= 6 
  console.table({min, max})
  
  const onIncrease = () => {
    const increase = score + 1
 
    if ( increase <= max) {
      setScore(increase)
    }
  }

  const onDecrease = () => {
    const decrease = score - 1

    if( decrease >= min ) {
      setScore(decrease)
    }

  }

  return(
    <div className="attribute-select-grid">
      <EuiText color={score === max ? "success" : "default"}>
        {attribute}
      </EuiText>
      <div className="attribute-select-icons">
        <EuiButtonIcon 
          aria-label={`increase ${attribute}`}
          isDisabled={disableInputs || score === max}
          iconType="arrowUp" 
          onClick={onIncrease} 
        /> 
        <EuiText color={score === max ? "success" : "default"}>
          {score}
        </EuiText>
        <EuiButtonIcon 
          aria-label={`decrease ${attribute}`}
          isDisabled={score === min}
          iconType="arrowDown" 
          onClick={onDecrease}
        /> 
      </div>
    </div>
  )
}

type AttributeSelectProps = {
  attribute: AttributeNames,
  disableInputs: boolean
}

export default AttributeCounter