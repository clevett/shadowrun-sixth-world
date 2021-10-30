import { EuiButtonIcon, EuiText } from '@elastic/eui'
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import { ATOM, CHARACTER_ATTRIBUTES } from '../../../../../recoil'

import "./styles.sass"

const AttributeCounter = ({
  atom,
  attribute,
  disableInputs = false,
}: AttributeSelectProps) => {
  const min = useRecoilValue<number>( CHARACTER_ATTRIBUTES.min(attribute.toUpperCase()) )
  const max = useRecoilValue<number>( CHARACTER_ATTRIBUTES.max(attribute.toUpperCase()) )
  const attributeAtMax = useRecoilValue(CHARACTER_ATTRIBUTES.CHARACTER_ATTRIBUTES_AT_MAX)
  const [ score, setScore ] = useRecoilState<number>(ATOM.characterAttribute(`${atom}`))

  useEffect(() => {
    if (score >= max) {
      setScore(max)
    }
  }, [ max, score, setScore ])

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

  const maxed = attributeAtMax.length > 1 && attributeAtMax.includes(attribute)
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
  atom: string,
  attribute: AttributeNames,
  disableInputs?: boolean
}

export default AttributeCounter