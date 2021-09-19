import { EuiButtonIcon, EuiText } from '@elastic/eui'
import { useRecoilState } from 'recoil'

import { ATOM } from '../../../../../recoil'

import "./styles.sass"

const AttributeCounter = ({
  attribute,
  disableInputs = false,
  maxed = false,
  minMax
}: AttributeSelectProps) => {
  const { min, max } = minMax
  const [score, setScore] = useRecoilState<number>(ATOM.characterAttribute(`${attribute.toUpperCase()}`))

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

  const textColorWhenMax = maxed ? "warning" : score === max ? "success" : "default"

  return(
    <div className="attribute-select-grid">
      <EuiText color={textColorWhenMax}>
        {attribute}
      </EuiText>
      <div className="attribute-select-icons">
        <EuiButtonIcon 
          aria-label={`increase ${attribute}`}
          isDisabled={disableInputs || score === max}
          iconType="arrowUp" 
          onClick={onIncrease} 
        /> 
        <EuiText color={textColorWhenMax}>
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
  disableInputs?: boolean
  maxed: boolean,
  minMax: MinMax
}

export default AttributeCounter